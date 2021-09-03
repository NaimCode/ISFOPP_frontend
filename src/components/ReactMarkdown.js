import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
class ReactMarkdownComponent extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return <ReactMarkdown>{data}</ReactMarkdown>;
  }
}
export default ReactMarkdownComponent;
