import { useState } from 'react';
import { projects } from './data/projects.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TagFilter from './components/TagFilter.jsx';
import ProjectList from './components/ProjectList.jsx';
import ContactForm from './components/ContactForm.jsx';
import { GitHubRepos } from './components/GitHubRepos.jsx';
import './index.css';

const tags = [...new Set(projects.flatMap((p) => p.tags))];

export default function App() {
  const [activeTag, setActiveTag] = useState('all');
  const [query, setQuery] = useState('');

  const shown = projects
    .filter((p) => activeTag === 'all' || p.tags.includes(activeTag))
    .filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));

  function handleReset() {
    setActiveTag('all');
    setQuery('');
  }

  return (
    <div className="app">
      <Header />
      <main className="container">
        <Hero />

        <section id="projects">
          <h2>Dự án của mình</h2>

          {/* Sử dụng component GitHubRepos (chỉ hiện tối đa 6 repo) */}
          <GitHubRepos username="nguyenvohoangphuc1404-max" />

          <div className="search-bar">
            <input
              type="text"
              placeholder="Tìm kiếm dự án theo tên..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <TagFilter
            tags={tags}
            activeTag={activeTag}
            onChange={setActiveTag}
          />

          <div className="filter-status">
            <p>Đang hiện {shown.length} / {projects.length} dự án</p>
            {(activeTag !== 'all' || query !== '') && (
              <button type="button" className="btn-reset" onClick={handleReset}>
                Xoá lọc
              </button>
            )}
          </div>

          <ProjectList projects={shown} />
        </section>

        <section id="contact">
          <h2>Liên hệ</h2>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}