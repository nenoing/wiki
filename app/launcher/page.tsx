"use client"

import { motion } from "framer-motion"
import { AlertTriangle } from 'lucide-react'
import { fadeInUpVariants } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LauncherPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants()}
      >
        <Card>
          <CardHeader>
            <CardTitle>🖥️ Какой лаунчер выбрать?</CardTitle>
            <CardDescription>
              Информация о рекомендуемых лаунчерах для входа на сервер
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <p>
                Для входа на сервер мы рекомендуем использовать TLauncher, так как он удобен для большинства игроков. 
                Однако вы можете использовать и другие лаунчеры, включая лицензионные.
              </p>
              
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Важно!</AlertTitle>
                <AlertDescription>
                  Убедитесь, что у вас установлена версия Minecraft 1.20.1, совместимая с сервером.
                </AlertDescription>
              </Alert>

              <Alert variant="warning">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Независимо от выбранного лаунчера, всегда проверяйте совместимость с сервером и соблюдайте правила использования модов.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

