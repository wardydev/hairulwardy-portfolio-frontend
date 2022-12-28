import React from "react";

export const serializers = {
  types: {
    block: (props) => {
      const style = props.node.style || "normal";

      if (/^h\d/.test(style)) {
        const level = style.replace(/[^\d]/g, "");
        return React.createElement(
          `h${level}`,
          { className: "text-2xl font-bold mb-2 mt-6" },
          props.children
        );
      }

      return style === "blockquote" ? (
        <blockquote>– {props.children}</blockquote>
      ) : (
        <p className="my-2 text-xl italic font-serif opacity-75">
          {props.children}
        </p>
      );
    },
    code: (props) =>
      console.log("code block", props) || (
        <pre data-language={props.node.language} className="bg-red-500">
          <code
            className="bg-red-500"
            style={{
              background: "#fe0011",
              wordWrap: "break-word",
              boxDecorationBreak: "clone",
              padding: ".1rem .3rem .2rem",
              borderRadius: ".2rem",
            }}
          >
            {props.node.code}
          </code>
        </pre>
      ),
    youtube: (props) => <pre>{JSON.stringify(props, null, 2)}</pre>,
    marks: {
      link: ({ children, value }) => {
        const rel = !value.href.startsWith("/")
          ? "noreferrer noopener"
          : undefined;
        return (
          <a
            href={value.href}
            rel={rel}
            className="text-cyan-500 hover:text-cyan-700 italic font-serif"
          >
            {children}
          </a>
        );
      },
    },
  },
  list: (props) =>
    console.log("list", props) ||
    (props.type === "bullet" ? (
      <ul className="list-disc list-outside italic font-serif text-xl mb-6">
        {props.children}
      </ul>
    ) : (
      <ol className="list-decimal list-outside italic font-serif text-xl mb-6">
        {props.children}
      </ol>
    )),
  listItem: (props) =>
    console.log("list", props) ||
    (props.type === "bullet" ? (
      <li className="mb-4">{props.children}</li>
    ) : (
      <li className="mb-4">{props.children}</li>
    )),
  marks: {
    strong: (props) =>
      console.log("strong", props) || <strong>{props.children}</strong>,
    em: (props) => console.log("em", props) || <em>{props.children}</em>,
    code: (props) =>
      console.log("code", props) || (
        <pre
          className="py-3 px-5 font-mono not-italic rounded-md text-base mb-4 mt-2"
          style={{ backgroundColor: "#000F1C" }}
        >
          <code className="vg-red-500">{props.children}</code>
        </pre>
      ),
  },
};
