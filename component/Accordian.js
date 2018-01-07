import React, { Component } from 'react'
import TKPTouchable from './TKPTouchable'
import { View, Text, StyleSheet, Image, Animated } from 'react-native'

const verticalPadding = 24
const titleFontSize = 15

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 10,
		backgroundColor: '#fff',
		overflow: 'hidden',
		borderBottomWidth: 1,
		borderBottomColor: '#e0e0e0',
	},
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: verticalPadding,
		paddingHorizontal: 10,
	},
	title: {
		flex: 1,
		color: '#2a2f43',
		fontWeight: '600',
		fontSize: titleFontSize,
		textAlign: 'left',
    color: 'rgba(0,0,0,0.7)',

	},
	button: {
	},
	body: {
		paddingBottom: 20,
		paddingHorizontal: 10,
	},
})

class Accordion extends Component {
	constructor(props) {
		super(props)

		let animationValue = new Animated.Value()
		if (!props.expanded) {
			const val = verticalPadding * 2 + titleFontSize + 2
			animationValue = new Animated.Value(val) 
		}
		this.state = {
			title: props.title,
			expanded: props.expanded,
			animation: animationValue,
		}
	}

	toggle = () => {
		const { minHeight, maxHeight } = this.state
		let initialValue = this.state.expanded ? minHeight + maxHeight : minHeight
		let finalValue = this.state.expanded ? minHeight : minHeight + maxHeight

		this.setState({
			expanded: !this.state.expanded
		})

		this.state.animation.setValue(initialValue)

		Animated.spring(this.state.animation, {
			toValue: finalValue,
		}).start()
	}

	setMinHeight = (event) => {
		this.setState({
			minHeight: event.nativeEvent.layout.height,
		})
	}

	setMaxHeight = (event) => {
		this.setState({
			maxHeight: event.nativeEvent.layout.height,
		})
	}

	render() {
		const icon = this.state.expanded ? require('./images/up.png'): require('./images/down.png')
		return (
			<Animated.View style={[styles.container, { height: this.state.animation }]}>
				<View onLayout={this.setMinHeight} >
					<TKPTouchable
						style={styles.button}
						onPress={this.toggle}
					>
						<View style={styles.titleContainer}>
							<Text style={styles.title}>{this.props.title}</Text>
							<Image source={icon} style={styles.button} />
						</View>
					</TKPTouchable>
				</View>
				<View style={styles.body} onLayout={this.setMaxHeight}>
					{this.props.children}
				</View>
			</Animated.View >
		)
	}
}

export default Accordion