import React from 'react';
import Upload from './Upload';
import ViewUpload from './ViewUpload';
const Uploads = () => {
    console.log("uploads and history");
    const [fetchList, setFetchList] = React.useState(false)
  return (
    <>
        <Upload  setFetchList={setFetchList} fetchList={fetchList} />
        <ViewUpload fetchList={fetchList} />
    </>
  )
}
export default Uploads;
