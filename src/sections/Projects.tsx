import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Eye, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const projects = [
  {
    id: 1,
    title: 'Website simple',
    description: 'Redesign website simple dengan UI modern dan responsif. Menggunakan HTML, CSS, dan JavaScript.',
    fullDescription: 'Proyek ini adalah redesign website simple yang bertujuan untuk meningkatkan user experience dan tampilan visual. Website dilengkapi dengan fitur berita, galeri, dan informasi sekolah yang mudah diakses. Dibuat menggunakan HTML5, CSS3, dan JavaScript vanilla dengan pendekatan mobile-first design.',
    image: '/project-1.jpg',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    github: 'https://github.com/paltnez',
    demo: 'https://example.com',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Aplikasi mudah',
    description: 'Aplikasi manajemen tugas dengan fitur CRUD, filter, dan local storage.',
    fullDescription: 'Aplikasi todo list modern yang dibangun dengan React dan Tailwind CSS. Memiliki fitur tambah, edit, hapus tugas, filter berdasarkan status (aktif/selesai), dan penyimpanan data di local storage. Dilengkapi dengan animasi smooth dan UI yang intuitif.',
    image: '/project-2.jpg',
    tags: ['React', 'Tailwind CSS', 'Local Storage'],
    github: 'https://github.com/paltnez',
    demo: 'https://example.com',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Desain Logo UMKM',
    description: 'Branding lengkap untuk usaha lokal termasuk logo, kartu nama, dan kemasan.',
    fullDescription: 'Proyek desain branding untuk UMKM lokal yang mencakup pembuatan logo, kartu nama, kop surat, dan desain kemasan produk. Proses desain melibatkan riset target market, brainstorming konsep, dan iterasi desain berdasarkan feedback klien.',
    image: '/project-3.jpg',
    tags: ['Illustrator', 'Branding'],
    github: null,
    demo: 'https://example.com',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    title: 'Video & Foto Editing',
    description: 'Video & Foto editing konten social media.',
    fullDescription: 'Video & Foto editing ialah sebagai pendukung pembuatan branding diri saya dalam dunia digital',
    image: '/project-4.jpg',
    tags: ['AlightMotion', 'KineMaster', 'Capcut'],
    github: null,
    demo: 'https://example.com',
    color: 'from-green-500 to-teal-500',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative"
      >
        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-500">
          {/* Image Container */}
          <div className="relative h-56 overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
            />
            
            {/* Hover Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDialogOpen(true)}
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <Eye className="w-5 h-5" />
              </motion.button>
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              )}
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Category Badge */}
            <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-xs font-semibold`}>
              Proyek {index + 1}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold font-poppins text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
              {project.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Button */}
            <Button
              onClick={() => setIsDialogOpen(true)}
              variant="ghost"
              className="w-full group/btn text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              Lihat Detail
              <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold font-poppins">{project.title}</DialogTitle>
            <DialogDescription className="text-slate-600 dark:text-slate-400">
              Detail proyek lengkap
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-xl"
            />
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.fullDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-sm font-medium`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3 pt-4">
              {project.github && (
                <Button asChild variant="outline">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 w-4 h-4" />
                    GitHub
                  </a>
                </Button>
              )}
              <Button asChild className={`bg-gradient-to-r ${project.color}`}>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 w-4 h-4" />
                  Lihat Demo
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 text-sm font-medium mb-4">
            Proyek & Karya
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-slate-800 dark:text-white mb-4">
            Hasil <span className="text-gradient">Karya</span> Saya
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Beberapa proyek yang telah saya kerjakan, dari web development hingga desain
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
