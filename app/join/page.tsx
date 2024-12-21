"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { fadeInUpVariants } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function JoinPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants()}
      >
        <Card>
          <CardHeader>
            <CardTitle>Как вступить к нам</CardTitle>
            <CardDescription>
              Заполните анкету и отправьте её в наш чат
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Анкета на вступление:</h3>
              <div className="bg-muted rounded-lg p-4 space-y-2">
                <p>• Имя + Ник</p>
                <p>• Возраст + День рождения</p>
                <p>• Часовой пояс</p>
                <p>• Актив/Неактив?</p>
                <p>• Почему выбрали именно нас?</p>
                <p>• Версия Minecraft + Java или Bedrock</p>
                <p>• Сможете ли уделять достаточно времени хаусу?</p>
                <p>• Состоите или состояли в других хаусах?</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Button asChild size="lg" className="w-full">
                <Link href="https://t.me/+mjIfXRUDx19iOGQy">
                  Отправить анкету в чат
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full">
                <Link href="https://t.me/Catonis_dev">
                  Связаться с администратором
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

