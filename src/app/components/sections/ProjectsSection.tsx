'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './ProjectsSection.module.css';
import type { Project } from '@/content/content';
import { content } from '@/content/content';
import { Reveal } from '../motion/Reveal';

const featuredProjects = content.selectedWork.slice(0, 3);

function ExternalArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17L17 7M10 7h7v7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectCover({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className={styles.cover} aria-hidden>
        <Image
          src={project.image}
          alt=""
          width={1200}
          height={675}
          sizes="(max-width: 980px) 100vw, 50vw"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    );
  }

  const urlLabel = project.url ? new URL(project.url).hostname.replace('www.', '') : 'internal';

  return (
    <div className={styles.cover} aria-hidden>
      <div className={styles.coverPlaceholder}>
        <span>{urlLabel}</span>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  const rolePreview = project.role.slice(0, 3);

  return (
    <article className={styles.card}>
      <div className={styles.cardInner}>
        <ProjectCover project={project} />

        <div className={styles.topRow}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
        </div>

        <p className={styles.cardDesc}>{project.description}</p>

        <div className={styles.tags} aria-label="Oblasti">
          {project.disciplines.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.stack} aria-label="Tech stack">
          {project.stack.map((t) => (
            <span key={t} className={styles.stackItem}>
              {t}
            </span>
          ))}
        </div>

        <ul className={styles.role} aria-label="Moje role">
          {rolePreview.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button
            type="button"
            className={`${styles.actionBtn} ${styles.actionPrimary}`}
            onClick={() => onOpen(project)}
            aria-haspopup="dialog"
          >
            Detail
          </button>

          {project.url ? (
            <a
              className={styles.actionBtn}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Otevřít ${project.title} v novém okně`}
            >
              Live <ExternalArrow />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const prevActive = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const focusableSelector =
      'a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key !== 'Tab') return;

      const root = modalRef.current;
      if (!root) return;

      const nodes = Array.from(root.querySelectorAll<HTMLElement>(focusableSelector)).filter(
        (el) => !el.hasAttribute('disabled') && el.tabIndex !== -1
      );

      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey) {
        if (!active || active === first) {
          e.preventDefault();
          last.focus();
        }
        return;
      }

      if (active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
      prevActive?.focus();
    };
  }, [onClose]);

  const architectureColumns: Array<{
    title: string;
    items: string[];
  }> = [
    { title: 'Frontend', items: project.architecture.frontend },
    { title: 'Backend', items: project.architecture.backend },
    { title: 'Database', items: project.architecture.database },
  ];

  return (
    <div className={`${styles.modalOverlay} ${styles.modalOpen}`} role="presentation">
      <button
        type="button"
        className={styles.modalBackdrop}
        onClick={onClose}
        aria-label="Zavřít detail"
      />

      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-${project.slug}-title`}
        ref={modalRef}
      >
        <div className={styles.modalInner}>
          <div className={styles.modalHeader}>
            <div>
              <h3 id={`project-${project.slug}-title`}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
            </div>
            <button ref={closeRef} type="button" className={styles.closeBtn} onClick={onClose}>
              Zavřít
            </button>
          </div>

          <div className={styles.modalActions}>
            {project.url ? (
              <a
                className={`${styles.actionBtn} ${styles.actionPrimary}`}
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                Otevřít web <ExternalArrow />
              </a>
            ) : null}
            <button type="button" className={styles.actionBtn} onClick={onClose}>
              Zpět
            </button>
          </div>

          <div className={styles.modalGrid}>
            <div className={styles.modalBlock}>
              <h4>My role / What I built</h4>
              <ul>
                {project.role.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>

            <div className={styles.modalBlock}>
              <h4>Highlights</h4>
              <ul>
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.modalBlock}>
            <h4>Architecture</h4>
            <div className={styles.columns}>
              {architectureColumns.map((col) => (
                <div key={col.title} className={styles.column}>
                  <div className={styles.columnTitle}>{col.title}</div>
                  <ul>
                    {col.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.modalBlock}>
            <h4>Tech stack</h4>
            <div className={styles.stack}>
              {project.stack.map((t) => (
                <span key={t} className={styles.stackItem}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!activeProject) return;
    const onHashChange = () => setActiveProject(null);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [activeProject]);

  return (
    <>
      <section className={styles.section} id="work">
        <div className="container">
          <div className={styles.head}>
            <div className={styles.kicker}>Moje práce</div>
            <h2 className={styles.title}>Vybrané projekty</h2>
            <p className={styles.description}>
              Premium UI, čistá architektura a výkon. U každého projektu najdete role, stack a detail architektury.
            </p>
          </div>

          <div className={styles.bento}>
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.05}>
                <ProjectCard project={project} onOpen={(p) => setActiveProject(p)} />
              </Reveal>
            ))}
          </div>

          <div id="projects" className={styles.more}>
            <div>
              <div className={styles.moreTitle}>…a další projekty</div>
              <p className={styles.moreText}>
                Některé projekty jsou interní nebo pod NDA — rád o nich pohovořím osobně.
              </p>
            </div>
            <a className={`${styles.actionBtn} ${styles.actionPrimary}`} href="#contact">
              Domluvit se
            </a>
          </div>
        </div>
      </section>

      {activeProject ? <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} /> : null}
    </>
  );
}
