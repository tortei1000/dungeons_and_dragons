module.exports = {
  editCharInfo: async (req, res) => {
    console.log(`editCharInfo fired`, req.body)
    const db = req.app.get('db')

    let { char_name, char_class, char_level, background, player_name, race, alignment, experience_points } = req.body

    let editCharInfo = await db.edit_char_info([char_name, char_class, char_level, background, player_name, race, alignment, experience_points])

    res.send(editCharInfo)

  },

  addStr: async (req, res) => {
    console.log(`addStr fired`, req.body)
    const db = req.app.get('db')

    let { char_name, str } = req.body

    let newStr = await db.add_str([char_name, str])

    res.send(newStr)

  },

}