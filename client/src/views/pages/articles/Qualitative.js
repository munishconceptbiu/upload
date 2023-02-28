import React from 'react'
import Tabs from '../../../components/ArticlesAnalysis/Tabs'
import AnalysisDetails from '../../../components/ArticlesAnalysis/AnalysisDetails'

const Qualitative = () => {
    return (
        <>
        <div className="content-box mt-0">
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

