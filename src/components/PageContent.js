import ReactHtmlParser from "react-html-parser";
import Footer from "./Footer";
const PageContent = ({content}) => {
    return (<>
          <div className="pt-11 md:pt-20 w-full flex justify-center">
        <div className="max-w-screen-md px-3 flex flex-col items-center">
         { ReactHtmlParser(content)}
        </div>
      </div>
      <Footer />
      </>
    )
}

export default PageContent
