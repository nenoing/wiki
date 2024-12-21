"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { fadeInUpVariants } from "@/lib/utils"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants()}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">
          Добро пожаловать на Wiki сервера Sunset! 🌅
        </h1>
        <p className="text-lg text-muted-foreground">
          Ознакомьтесь с правилами и присоединяйтесь к нашему сообществу
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUpVariants(0.2)}
        initial="hidden"
        animate="visible"
        className="grid gap-6 md:grid-cols-2"
      >
        <Link
          href="/rules"
          className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2">📜 Правила сервера</h2>
          <p className="text-muted-foreground">
            Ознакомьтесь с основными правилами и требованиями для игроков
          </p>
        </Link>

        <Link
          href="/join"
          className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2">🤝 Как вступить</h2>
          <p className="text-muted-foreground">
            Заполните анкету и присоединитесь к нашему сообществу
          </p>
        </Link>

        <Link
          href="/mods"
          className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2">🔧 Моды</h2>
          <p className="text-muted-foreground">
            Информация о разрешенных и запрещенных модификациях
          </p>
        </Link>

        <Link
          href="https://t.me/Catonis_dev"
          className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2">📞 Связаться с админом</h2>
          <p className="text-muted-foreground">
            Задайте вопросы или получите помощь от администрации
          </p>
        </Link>
      </motion.div>
    </div>
  )
}

