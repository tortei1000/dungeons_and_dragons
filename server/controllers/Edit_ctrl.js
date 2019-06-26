module.exports = {
  editCharInfo: async (req, res) => {
    console.log(`editCharInfo fired`, req.body)
    const db = req.app.get('db')

    let { char_name, char_class, char_level, background, player_name, race, alignment, experience_points } = req.body

    let editCharInfo = await db.edit_char_info([char_name, char_class, char_level, background, player_name, race, alignment, experience_points])

    res.send(editCharInfo)

  },

  saveAtt: async (req, res) => {
    console.log(`addStr fired`, req.body)
    const db = req.app.get('db')

    let { char_name, str, dex, con, cha, intel, wis  } = req.body

    let newStr = await db.save_att([char_name, str, dex, con, cha, intel, wis])

    res.send(newStr)

  },

}