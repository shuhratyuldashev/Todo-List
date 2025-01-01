import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

const cardsData = [
    {
        title: "Список всех задач",
        description: "Просматривайте все задачи в одном месте. Удобный доступ к выполненным, невыполненным и избранным делам.",
        link: "/all"
    },{
        title: "Избранные",
        description: "Отмечайте важные задачи, чтобы они всегда были под рукой.",
        link: "/favorite"
    },{
        title: "Невыполненные задачи",
        description: "Контролируйте, какие задачи еще нужно завершить, чтобы ничего не забыть.",
        link: "/not-completed"
    }
] 

const Cards = () => {
    return (
        <div className="m-0 grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
            {cardsData.map((card) => (
                <Card key={card.title} className="flex flex-col transition-shadow duration-500 hover:shadow-lg">
                    <CardHeader>
                        <CardTitle>{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>{card.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="mt-auto">
                        <a href={card.link}>
                            <Button variant="ghost">Открыть</Button>
                        </a>
                    </CardFooter>
                </Card>       
            ))}
        </div>
    )
}

export default Cards
