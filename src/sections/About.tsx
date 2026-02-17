import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Code, Palette, Mic, Video, Sparkles, Target, Lightbulb, Heart } from 'lucide-react';

const skills = [
  { name: 'HTML/CSS', percentage: 85, icon: Code, color: 'from-orange-500 to-red-500' },
  { name: 'Public Speaking', percentage: 50, icon: Mic, color: 'from-blue-500 to-cyan-500' },
  { name: 'UI/UX Design', percentage: 65, icon: Palette, color: 'from-purple-500 to-pink-500' },
  { name: 'Video Editing', percentage: 80, icon: Video, color: 'from-green-500 to-teal-500' },
];

const interests = [
  { icon: Sparkles, label: 'Kreativitas', desc: 'Suka menciptakan hal baru' },
  { icon: Target, label: 'Fokus', desc: 'Tekun dalam mengerjakan tugas' },
  { icon: Lightbulb, label: 'Inovasi', desc: 'Selalu cari solusi baru' },
  { icon: Heart, label: 'Passion', desc: 'Cinta pada teknologi' },
];

function SkillBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          transition: { delay: index * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <skill.icon className="w-5 h-5" />
          </div>
          <span className="font-semibold text-slate-700 dark:text-slate-200">{skill.name}</span>
        </div>
        <motion.span
          animate={{ scale: isHovered ? 1.2 : 1 }}
          className="font-bold text-slate-600 dark:text-slate-400"
        >
          {skill.percentage}%
        </motion.span>
      </div>
      <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.15 + 0.3, ease: [0.16, 1, 0.3, 1] as const }}
          className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
        >
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
          }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4">
            Tentang Saya
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-slate-800 dark:text-white mb-4">
            Kenalan Lebih <span className="text-gradient">Dekat</span> Yuk!
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Perkenalkan, saya siswa SMA yang sedang mengejar mimpi di dunia teknologi
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                x: 0, 
                transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const } 
              },
            }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{ transform: 'rotate(-3deg)' }}
              >
                <img
                  src="/about-photo.jpg"
                  alt="Tentang Saya"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] as const } 
                  },
                }}
                className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl border border-slate-100 dark:border-slate-700"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl">
                    🎯
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Cita-cita</p>
                    <p className="font-bold text-slate-800 dark:text-white">Software Engineer</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                x: 0, 
                transition: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const } 
              },
            }}
            className="space-y-8"
          >
            {/* Bio Text */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-poppins text-slate-800 dark:text-white">
                Siswa SMA yang Suka Ngoding & Design 🚀
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Saya adalah Deni Aryadi siswa kelas XI IPS yang memiliki ketertarika pada teknologi dan desain. 
                Sejak kecil, saya selalu penasaran dengan cara kerja aplikasi dan website. 
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Kini, saya sedang mecoba hal baru untuk menjadi lebih baik yang dapat menciptakan 
                diri sendiri yang bermanfaat. Saya juga aktif dalam berbagai kegiatan sekolah 
                dan organisasi untuk mengembangkan soft skills.
              </p>
            </div>

            {/* Interests Grid */}
            <div className="grid grid-cols-2 gap-4">
              {interests.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  variants={{
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      transition: { duration: 0.5, delay: 0.5 + index * 0.1, ease: [0.16, 1, 0.3, 1] as const } 
                    },
                  }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
                >
                  <item.icon className="w-6 h-6 text-blue-500 mb-2" />
                  <p className="font-semibold text-slate-800 dark:text-white text-sm">{item.label}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold font-poppins text-slate-800 dark:text-white">
                Skill & Kemampuan
              </h4>
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
