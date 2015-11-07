/**
 * Created by root on 23/12/16.
 */

import React , { Component } from 'react';
import List from './CardList';

class KanbanBoard extends Component{

    render(){
        return(
                <div className="app">

                    <CardList id="todo" title="To Do" cards={this.props.cards.filter((card)=>card.status==="todo")}/>

                    <CardList id="progress" title="In Progress" cards={this.props.cards.filter((card)=>card.status==="in-progress")}/>

                    <CardList id="done" title="Done" cards={this.props.cards.filter((card)=>card.status==="done")} />

                </div>
        );
    }
}
