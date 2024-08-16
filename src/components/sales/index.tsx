import { CircleDollarSign, DollarSign } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export function Sales() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">
            Último clientes
          </CardTitle>
          <CircleDollarSign className="ml-auto w-4 h-4" />
        </div>
        <CardDescription>Novos clientes nas últimas 24 horas</CardDescription>
      </CardHeader>

      <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/425567061_1400800660541609_8505471216784698920_n.jpg?ccb=11-4&oh=01_Q5AaIEUxp_kI2BNTwft9hmDNgYJbUkl5ANq3Pv0Ewp7AQYU3&oe=66CBDCAA&_nc_sid=5e03e0&_nc_cat=101" />
            <AvatarFallback>DV</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              Futuro Programador
            </p>
            <span className="text-[12px] sm:text-sm text-gray-400">
              Teste@teste.com
            </span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/425567061_1400800660541609_8505471216784698920_n.jpg?ccb=11-4&oh=01_Q5AaIEUxp_kI2BNTwft9hmDNgYJbUkl5ANq3Pv0Ewp7AQYU3&oe=66CBDCAA&_nc_sid=5e03e0&_nc_cat=101" />
            <AvatarFallback>DV</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              Futuro Programador
            </p>
            <span className="text-[12px] sm:text-sm text-gray-400">
              Teste@teste.com
            </span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/425567061_1400800660541609_8505471216784698920_n.jpg?ccb=11-4&oh=01_Q5AaIEUxp_kI2BNTwft9hmDNgYJbUkl5ANq3Pv0Ewp7AQYU3&oe=66CBDCAA&_nc_sid=5e03e0&_nc_cat=101" />
            <AvatarFallback>DV</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              Futuro Programador
            </p>
            <span className="text-[12px] sm:text-sm text-gray-400">
              Teste@teste.com
            </span>
          </div>
        </article>
      </CardContent>
    </Card>
  )
}
