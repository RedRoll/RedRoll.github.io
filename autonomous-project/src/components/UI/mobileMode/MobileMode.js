import { useState, useEffect, React } from "react"

const WidthListener = props => {

    const [mobile, setMobile] = useState(window.innerWidth <= props.width)


    // rewrote the slider for practice! 
    useEffect(() => {
        const onWindowResize = () => {
            setMobile(window.innerWidth <= props.width)
        }

        window.addEventListener('resize', onWindowResize) // кожен раз при зміні ширини viewport заупускається цей listener

        return () => {
            window.removeEventListener('resize', onWindowResize) // коли (в даному випадку ні, але це хороша практика - така метода написання) компонент демонтується з DOM дерева цей listener теж демонтується (зроблено для оптимізації)
        }
    },
        [props.width])

    const children = props.children
    
   

    return (
        <div className={props.className}>
            {
                mobile ?
            
                    children[0]
                    :
                    children[1]

            }
        </div>
    )
}

export default WidthListener