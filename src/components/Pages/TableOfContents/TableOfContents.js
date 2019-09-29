import React from "react";
import { TOC_HEADER } from "../../../messages";
import "./TableOfContents.css";

export class TableOfContents extends React.Component {
  render() {
    const { pages } = this.props;
    return (
      <div className="table-of-contents">
        <h1>{TOC_HEADER}</h1>
        <div>
          {pages.map((page, i) => {
            return (
              <div key={page} className="table-of-contents_item">
                <span>{page}</span>
                <span>{i + 1}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
