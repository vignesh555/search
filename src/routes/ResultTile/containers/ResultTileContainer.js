 import { connect } from 'react-redux'
 import { getSearchData } from '../modules/resultTile'
 import ResultTile from '../components/ResultTile'

 const mapDispatchToProps = {
   getSearchData
 }

 const mapStateToProps = (state) => {
   return {
     searchData : state.searchData.toJS()
   }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(ResultTile)
