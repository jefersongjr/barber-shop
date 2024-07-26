import { clientes } from '@barber/core'
import { LayoutGrid } from '../ui/layout-grid'
import ClienteItem from './ItemClient'
import Title from '../../components/shared/Title'

export default function NossosClientes() {
    const classes = ['md:col-span-2', 'col-span-1', 'col-span-1', 'md:col-span-2']
    const cards = clientes.map((cliente, i) => {
        return {
            id: cliente.id,
            content: <ClienteItem name={cliente.name} testimony={cliente.testimony} />,
            className: classes[i],
            thumbnail: cliente.urlImg,
        }
    })

    return (
        <div className="container flex flex-col items-center gap-16">
            <Title
                tag="Clientes"
                primary="Quem Manda Aqui"
                secondary="Nossos clientes são os chefes! Aqui, eles mandam, desmandam e ainda saem com estilo de rockstar!"
            />
            <div className="h-[900px] w-full">
                <LayoutGrid cards={cards} />
            </div>
        </div>
    )
}
