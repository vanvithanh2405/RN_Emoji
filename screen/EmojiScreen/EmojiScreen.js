import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { styles } from './styles/EmojiScreenStyle'

const emojiData = [
  require("../../assets/emoji/angry.png"),
  require("../../assets/emoji/care.png"),
  require("../../assets/emoji/haha.png"),
  require("../../assets/emoji/like.png"),
  require("../../assets/emoji/love.png"),
  require("../../assets/emoji/sad.png"),
]


export default class EmojiScreen extends Component {

  state = {
    emojiSelected: null
  }


  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.root_text}>Bạn đang cảm thấy như thế nào</Text>
        <Image style={styles.style_icons} source={this.state.emojiSelected} />
        <View style={styles.row}>
          {
            emojiData.map((data, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => this.setState({ emojiSelected: data })}
              >
                <Image style={styles.emoji_icons} source={data} />
              </TouchableOpacity>
            ))

          }
        </View>
      </View>
    )
  }
}