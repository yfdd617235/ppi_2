import React from 'react'

function TradingPage() {
    return (
        <div>

            <div className='container mx-auto pt-20 px-4 md:px-10 text-zinc-400'>
                <h1 className='font-bold'>Disclaimer:</h1>
                <p className="text-justify text-xs md:text-lg my-4">
                    The information provided on this website is purely informational and educational in nature. It is not intended as an invitation or encouragement to engage in any trading activity. We do not offer any financial advice or recommendations. Please be aware that trading is not a game, and it involves significant risks, including the potential loss of money. We urge you to carefully consider your financial situation and risk tolerance before participating in any form of trading. Always seek professional advice if needed.
                </p>
            </div>

            <div className="border-y border-zinc-600 mt-20">
                <div className="container flex flex-col md:flex-row justify-center items-center mx-auto py-14 px-4 md:px-10">
                    <div className="flex-shrink-0 md:w-1/4 flex justify-center items-center">
                        <h2 className="text-lg md:text-2xl font-bold text-center">What is Trading?</h2>
                    </div>
                    <div className="md:w-3/4">
                        <p className="text-justify text-xs md:text-lg my-4">
                            Trading refers to the act of buying and selling financial assets such as stocks, bonds, commodities, or currencies, with the goal of making a profit. Traders attempt to capitalize on price fluctuations in the market by entering and exiting positions at opportune times. It is important to understand that trading is a complex and speculative activity that requires knowledge, skill, and experience.

                            By using this website, you acknowledge that you understand the risks involved in trading and agree to use the information provided solely for educational purposes. We are not responsible for any financial losses incurred as a result of actions taken based on the information on this site.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-20 px-4 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">

                    {/* Card 1 */}
                    <div className="h-full shadow-md border border-zinc-600 rounded-lg">
                        <iframe
                            src="https://www.youtube.com/embed/m2q0tIxgevQ"
                            title="Trading 525 USD"
                            className="w-full h-64 rounded-t-lg"
                            allowFullScreen
                        ></iframe>
                        <div className="p-4 md:p-6">
                            <div className="flex flex-col space-y-3 text-left">
                                <p className="text-xs md:text-lg">Trading 525 USD en dos minutos. Futuros del SP500</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="h-full shadow-md border border-zinc-600 rounded-lg">
                        <iframe
                            src="https://www.youtube.com/embed/5x9nIEBr8QA"
                            title="Análisis premercado"
                            className="w-full h-64 rounded-t-lg"
                            allowFullScreen
                        ></iframe>
                        <div className="p-4 md:p-6">
                            <div className="flex flex-col space-y-3 text-left">
                                <p className="text-xs md:text-lg">Análisis Premercado</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="h-full shadow-md border border-zinc-600 rounded-lg">
                        <iframe
                            src="https://www.youtube.com/embed/gWySnIDaWUQ"
                            title="Retroceso de Fibonacci"
                            className="w-full h-64 rounded-t-lg"
                            allowFullScreen
                        ></iframe>
                        <div className="p-4 md:p-6">
                            <div className="flex flex-col space-y-3 text-left">
                                <p className="text-xs md:text-lg">Retroceso de Fibonacci</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default TradingPage