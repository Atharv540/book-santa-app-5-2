import * as React from 'react';
import {Dimensions, Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import {SwipeListView} from 'react-native-swipe-list-view';
import db from '../config'

export default class SwipeableListView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            allNotifications: this.props.allNotifications
        }
        console.log(this.state.allNotifications)
    }

    renderItem = data => (
        <ListItem 
            leftElement={<Icon name="book" type="font-awesome" color="#696969"/>}
            title={data.item.book_name}
            titleStyle={{ color: "black", fontWeight: "bold"}}
            subtitle={data.item.message}
            bottomDivider
        />
    )

    onSwipeValueChange = swipeData => {
        const {key, value} = swipeData
        if(value < -Dimensions.get("window").width){
            const newData = [...this.state.allNotifications]
            this.updateMarkAsRead(this.state.allNotifications[key]);
            newData.splice(key, 1);
            this.setState({
                allNotifications: newData,
            })
        }
    }

    renderHiddenItem = () => {
        <View style={styles.rowBack}>
            <View style={styles.backRightButton}>
                <Text style={styles.backRightButtonText}>Mark as Read</Text>
            </View>
        </View>
    }

    updateMarkAsRead = (notification) => {
        db.collection("allNotifications").doc(notification.doc_id).update({
            notification_status: "read",
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <SwipeListView 
                    disableRightSwipe
                    data={this.state.allNotifications}
                    renderItem={this.renderItem}
                    renderHiddenItem={this.renderHiddenItem}
                    previewRowKey={"0"}
                    previewOpenValue={-40}
                    previewOpenDelay={3000}
                    rightOpenValue={-Dimensions.get("window").width}
                    onSwipeValueChange={this.onSwipeValueChange}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    rowBack: {
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 15,
    },
    backRightButton: {
        alignItems: "center",
        position: "absolute",
        top: 0,
        bottom: 0,
        width: 100,
    },
    backRightButtonText: {
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center",
        alignSelf: "flex-start",
    },
})