import React from 'react'

function page({params}) {
  return <div>Individual ticket {params?.id}</div>;
}

export default page
