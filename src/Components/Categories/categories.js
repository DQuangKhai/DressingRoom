import React, { Component } from 'react'
import { connect } from 'react-redux'

class CategoriesComponent extends Component {
    render() {
        return (
            <div className="btn-group">
                {this.props.categoryList.map((item, index) => (
                    <button 
                        key={index} 
                        onClick = {() => this._choosenCategory(item.type)} 
                        className={this.props.choosenCategory ===item.type ? 'btn btn-primary' : 'btn btn-secondary'}
                    >
                        {item.showName}
                    </button>
                ))}
            </div>
        );
    }

    _choosenCategory = (payload) => {
        this.props.dispatch({
            type: "SET_CATEGORY",
            payload
        })
    }
}


const mapStateToProps = (state) => ({
    categoryList: state.categories,
    choosenCategory: state.choosenCategory,
})

export default connect(mapStateToProps)(CategoriesComponent);
