import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'


const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <span className="text-2xl font-semibold">Loading ...</span>,
})

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ "color": [] }, { 'background': [] }],
    [{ align: [] }],
    [{ 'size': [] }],
    ["blockquote"],
  ],
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'color',
  'background'
]

export default ({ getContent, jobDetailsAlert, defaultValue }) => {

  return (
      <div className="col-span-2">
          <span className="block py-4 font-semibold text-xl text-gray-600">
              Job details
          </span>
          <QuillNoSSRWrapper 
            modules={modules} 
            formats={formats} 
            theme="snow"
            value={defaultValue}
            onChange={getContent}
          />
          <span className="block text-xs text-red-600">{jobDetailsAlert}</span>
      </div>
  )
}