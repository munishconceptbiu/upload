import React from 'react'
import Tabs from '../../../components/ArticlesAnalysis/Tabs'
import AnalysisDetails from '../../../components/ArticlesAnalysis/AnalysisDetails'

const Qualitative = () => {
    return (
        <>
        <div class="page-title"><h1>Upload Qualitative Report</h1></div>
        <div className="content-box">
            <div className='row'>
                <div className='col-6'>
                    <AnalysisDetails/>
                </div>
                <div className='col-6 '>
                    
                    <Tabs/>
                </div>
            </div>
        </div>
        </>
          )
}
export default Qualitative

