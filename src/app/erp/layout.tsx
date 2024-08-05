import Header from "~/app/_components/header"
import Footerbar from "~/app/_components/footer";
import Leftsider from "~/app/_components/leftsider";


export default function EPRLayout({children}: {children: React.ReactNode}) {
    return (
        <main className="mx-auto ">
            <Header/>
            <div className="static flex flow-row ">
                <Leftsider />
                  {children}
            </div>

            <Footerbar/>
        </main>
)
}