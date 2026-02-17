import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Award, Users, Code2, Calendar, MapPin } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'Juara 2 Lomba Web Design',
    organization: 'Disdik Provinsi',
    year: '2023',
    level: 'Tingkat Provinsi',
    description: 'Meraih juara 2 dalam kompetisi desain web untuk siswa SMA se-provinsi dengan tema "Digitalisasi Pendidikan".',
    image: '/achievement-1.jpg',
    icon: Trophy,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 2,
    title: 'Sertifikat Kompetensi',
    organization: 'BNSP',
    year: '2023',
    level: 'Nasional',
    description: 'Mendapatkan sertifikasi Junior Web Developer dari Badan Nasional Sertifikasi Profesi.',
    image: '/achievement-2.jpg',
    icon: Award,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Ketua OSIS',
    organization: 'SMA Negeri 1',
    year: '2023/2024',
    level: 'Sekolah',
    description: 'Terpilih sebagai Ketua OSIS periode 2023/2024, memimpin berbagai kegiatan siswa.',
    image: '/achievement-3.jpg',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    title: 'Finalis Hackathon',
    organization: 'Tech Competition',
    year: '2023',
    level: 'Nasional',
    description: 'Masuk sebagai finalis dalam kompetisi hackathon teknologi dengan proyek aplikasi edukasi.',
    image: '/achievement-4.jpg',
    icon: Code2,
    color: 'from-green-500 to-teal-500',
  },
];

function TimelineItem({ achievement, index }: { achievement: typeof achievements[0]; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Content Card */}
      <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
        >
          <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:justify-end' : ''}`}>
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center text-white`}>
              <achievement.icon className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {achievement.year}
            </span>
          </div>
          
          <h3 className="text-xl font-bold font-poppins text-slate-800 dark:text-white mb-2">
            {achievement.title}
          </h3>
          
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
            {achievement.description}
          </p>
          
          <div className={`flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 ${isLeft ? 'md:justify-end' : ''}`}>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {achievement.organization}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {achievement.level}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Timeline Node */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.3, type: 'spring', stiffness: 200 }}
          className={`w-14 h-14 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center text-white shadow-lg z-10`}
        >
          <achievement.icon className="w-6 h-6" />
        </motion.div>
      </div>

      {/* Image */}
      <div className="flex-1 hidden md:block">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className={`relative rounded-2xl overflow-hidden shadow-lg ${isLeft ? '' : ''}`}
        >
          <img
            src={achievement.image}
            alt={achievement.title}
            className="w-full h-48 object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-${isLeft ? 'r' : 'l'} from-transparent to-black/30`} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="relative py-24 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-sm font-medium mb-4">
            Prestasi & Pengalaman
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-slate-800 dark:text-white mb-4">
            Perjalanan <span className="text-gradient">Saya</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Beberapa pencapaian dan pengalaman berharga yang telah saya raih
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 origin-top rounded-full"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {achievements.map((achievement, index) => (
              <TimelineItem key={achievement.id} achievement={achievement} index={index} />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '10+', label: 'Proyek Selesai' },
            { value: '5+', label: 'Sertifikat' },
            { value: '3+', label: 'Tahun Pengalaman' },
            { value: '100%', label: 'Komitmen' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700"
            >
              <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
