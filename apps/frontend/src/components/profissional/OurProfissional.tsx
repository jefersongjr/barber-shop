'use client'
import { Profissional } from '@barber/core'
import ItemProfissional from '../../components/profissional/ItemProfissional'
import Title from '../../components/shared/Title'
import useProfissionais from '../../data/hooks/useProfissionals'

export default function OurProfissional() {
    const { profissionais } = useProfissionais()

    return (
        <div className="container flex flex-col items-center gap-y-16">
            <Title
                tag="Time"
                primary="Nossos Brutos"
                secondary="Só os mais brabos estão aqui! Temos o orgulho de ter o time mais qualificado do Brasil!"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 ">
                {profissionais.map((profissional: Profissional) => (
                    <ItemProfissional key={profissional.id} profissional={profissional} />
                ))}
            </div>
        </div>
    )
}
