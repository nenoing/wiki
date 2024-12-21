"use client"

import { motion } from "framer-motion"
import { fadeInUpVariants } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from 'lucide-react'

export default function ModsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants()}
      >
        <Card>
          <CardHeader>
            <CardTitle>Запрещенные моды/клиенты/софты</CardTitle>
            <CardDescription>
              Информация о запрещенных модификациях и клиентах
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Внимание!</AlertTitle>
              <AlertDescription>
                Запрещены любые модификации и клиенты, которые соответствуют нижеперечисленным категориям или обладают схожей функциональностью:
              </AlertDescription>
            </Alert>

            <ul className="list-disc pl-6 space-y-2">
              <li>Авто-тотем, авто-элитры</li>
              <li>X-ray модификации</li>
              <li>Чит-модификации</li>
              <li>Модификации, выполняющие действия за игрока (AI и подобные)</li>
            </ul>

            <div>
              <h3 className="text-lg font-semibold mb-2">Примеры запрещенных модов:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Aristois</li>
                <li>Auto Clicker</li>
                <li>Baritone</li>
                <li>BetterClicker</li>
                <li>Better PVP</li>
                <li>Camera Utils</li>
                <li>Chest Tracker</li>
                <li>CMDCam</li>
                <li>Client Vein Miner</li>
                <li>CleanCut</li>
                <li>Elytra Swap</li>
                <li>EssentialClient</li>
                <li>FreeCam (Modrinth Edition также запрещён)</li>
                <li>Freelook</li>
                <li>FindMe</li>
                <li>Impact</li>
                <li>Inertia</li>
                <li>Jello</li>
                <li>LavaClearView</li>
                <li>SeedCracker</li>
                <li>StepUpNext</li>
                <li>InventoryPlus (запрещено снимать вещи с проклятьем несъемности и использовать на ивентах)</li>
                <li>Sigma</li>
                <li>The One Probe</li>
                <li>TrajectoryFabric</li>
                <li>Tweakeroo</li>
                <li>Wurst</li>
                <li>Wall-Jump</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Ресурспаки:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>X-ray (прозрачные блоки и т.п., однако подсветка руд разрешена)</li>
                <li>Чит-модификации</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Про авто-кликеры:</h3>
              <p>
                Авто-кликеры разрешены только для использования на фермах 
                кроме общественных объектов. 
                Любой мод или софт, который позволяет использовать кликер во время движения игрока, запрещён!
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants(0.2)}
      >
        <Card>
          <CardHeader>
            <CardTitle>Рекомендуемые моды</CardTitle>
            <CardDescription>
              Моды, которые разрешены и рекомендованы для использования
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1">
              <li>Simple Voice</li>
              <li>Emotecraft</li>
              <li>Remove Reloading Screen</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants(0.4)}
      >
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Важно!</AlertTitle>
          <AlertDescription>
            Играйте честно и соблюдайте правила, чтобы сделать игровой процесс интересным и справедливым для всех участников!
          </AlertDescription>
        </Alert>
      </motion.div>
    </div>
  )
}

