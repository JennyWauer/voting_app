const Option = (props) => {
    return (
        <div>
           <h3>COUNT</h3>
           <h1>{props.title}</h1>
           <button>+</button>
        </div>
    )
}

const optionList = (props) => {
    return (
        <div>
            <VoteOption title="React"/>
            <VoteOption title="Vue"/>
            <VoteOption title="Angular"/>
            <VoteOption title="Ember"/>
        </div>
    )
    ReactDOM.render(
        <VoteOptionList/>,
        document.getElementsByClassName('vote')
    )
}