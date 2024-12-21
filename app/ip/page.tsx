"use client"

import { motion } from "framer-motion"
import { fadeInUpVariants } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { MapPin } from 'lucide-react'
import { CopyButton } from "@/components/copy-button"
import { useToast } from "@/components/ui/use-toast"

export default function IPPage() {
  const { toast } = useToast()

  const serverIPs = [
    { ip: "sunset.gomc.fun", label: "Основной IP" },
    { ip: "sunset.servop.ru", label: "Альтернативный IP" }
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants()}
      >
        <Card>
          <CardHeader>
            <CardTitle>IP-адреса и Онлайн-карта</CardTitle>
            <CardDescription>
              Информация о IP-адресах сервера и онлайн-карте игроков
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">IP-адреса сервера:</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {serverIPs.map((server) => (
                  <div
                    key={server.ip}
                    className="relative flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                  >
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">{server.label}</p>
                      <p className="text-sm text-muted-foreground">{server.ip}</p>
                    </div>
                    <CopyButton
                      value={server.ip}
                      onCopy={() => {
                        toast({
                          title: "IP скопирован",
                          description: `IP-адрес ${server.ip} скопирован в буфер обмена`,
                        })
                      }}
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Вы можете использовать любой из этих IP-адресов для входа в игру.
              </p>
            </div>

            <Alert>
              <MapPin className="h-4 w-4" />
              <AlertTitle>Онлайн-карта игроков</AlertTitle>
              <AlertDescription className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <p>Адрес онлайн-карты:</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">135.181.237.45:25630</span>
                    <CopyButton
                      value="135.181.237.45:25630"
                      onCopy={() => {
                        toast({
                          title: "Адрес скопирован",
                          description: "Адрес онлайн-карты скопирован в буфер обмена",
                        })
                      }}
                    />
                  </div>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  Это не IP-адрес сервера, а ссылка на онлайн-карту игроков!
                </p>
                <a
                  href="http://135.181.237.45:25630"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-primary hover:underline"
                >
                  Открыть карту в новой вкладке
                </a>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

