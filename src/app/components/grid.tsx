import { ReactNode } from "react"


interface gridProps {
    children: ReactNode
    className?: string
}

export function GridContainer({children, className}: gridProps){
    const defaultClass = "w-full max-w-[75.25rem] mx-auto px-3 flex justify-between items-center"
    return(
        <div className={defaultClass}>
            {children}
        </div>
    )
}