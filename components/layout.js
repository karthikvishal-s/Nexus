export default function Layout({ children }) {
    return(
        <div  style={{backgroundColor:'#000000'}
        } className=" text-black max-w-2xl mx-auto border-l border-r min-h-screen border-gray-600">
           {children}
            </div>
    )
}