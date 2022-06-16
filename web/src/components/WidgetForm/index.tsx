import { useState } from "react";

import bugImage from "../../assets/images/bug.svg"
import ideaImage from "../../assets/images/idea.svg"
import thoughtImage from "../../assets/images/thought.svg"
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep"
import { FeedbackContentStep } from "./Steps/FeedbackContentStep"
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep"

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImage,
            alt: "Imagem de um inseto"
        }
    },

    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImage,
            alt: "Imagem de uma lâmpada"
        }
    },

    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImage,
            alt: "Imagem de um balão de pensamento"
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>()
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedback() {
        setFeedbackSent(false)
        setFeedbackType(null)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {
                feedbackSent ? (
                    <FeedbackSuccessStep onFeedbackRestartRequested={ handleRestartFeedback } />
                ) : (
                    <>
                        {
                            !feedbackType ? (
                                <FeedbackTypeStep onFeedbackTypeChanged={ setFeedbackType } />
                            ) : (
                                <FeedbackContentStep feedbackType={ feedbackType } onFeedbackRestartRequested={ handleRestartFeedback } onFeedbackSent={ () => setFeedbackSent(true) } />
                            )
                        }
                    </>
                )
            }

            <footer>
                <span className="text-xs text-neutral-400">Feito com 🤍 pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a></span>
            </footer>
        </div>
    )
}