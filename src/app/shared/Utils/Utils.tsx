import { createElement, FunctionComponent } from "react"

const markdownConversion = (text: string) => {
    const arr = text.split("'")
    let marked: any[] = []
    arr.forEach((e, i) => {
        if (i % 2 === 0) {
            marked = [ ...marked, e]
        } else {
            marked = [ ...marked, <span key={`s-${i}`} className="text-focus">{e}</span>]
        }
    })
    
    return marked
}

const markdownConversion1 = (text: string) => {
    text = "<div>" + text + "</div>"
    const doc = new DOMParser().parseFromString(text, "text/xml");
    return doc.firstChild
}

const asyncComponent = (component: FunctionComponent<any>, data: any, trigger: boolean) => {
    if(trigger){
      return createElement(component, {...data})
    }
    else {
      return ""
    }
  }

export default {
    markdownConversion,
    markdownConversion1,
    asyncComponent,
}