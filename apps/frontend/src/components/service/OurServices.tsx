'use client'
import { Service } from '@barber/core'
import { useRouter } from 'next/navigation'
import ServicoItem from './ItemService'
import Title from '../shared/Title'
import useServices from '../../data/hooks/useServices'

export default function OurServices() {
    const router = useRouter()
    const { servicos } = useServices()

    function startScheduling() {
        router.push('/scheduling')
    }

    return (
        <div className="flex flex-col gap-16">
            <Title
                tag="Serviços"
                primary="Do Classico ao Rock"
                secondary="Cabelo afiado, barba de lenhador e mãos de motoqueiro, tudo ao som de rock pesado!"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {servicos.map((service: Service) => (
                    <ServicoItem key={service.id} service={service} onClick={startScheduling} />
                ))}
            </div>
        </div>
    )
}
