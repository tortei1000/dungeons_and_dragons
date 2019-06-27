module.exports = {
  editCharInfo: async (req, res) => {
    console.log(`editCharInfo fired`, req.body)
    const db = req.app.get('db')

    let { char_name, char_class, char_level, background, player_name, race, alignment, experience_points } = req.body

    let editCharInfo = await db.edit_char_info([char_name, char_class, char_level, background, player_name, race, alignment, experience_points])

    res.send(editCharInfo)

  },

  saveAtt: async (req, res) => {
    console.log(`saveAtt fired`, req.body)
    const db = req.app.get('db')

    let { char_name, str, dex, con, cha, intel, wis } = req.body

    let newStr = await db.save_att([char_name, str, dex, con, cha, intel, wis])

    res.send(newStr)

  },

  saveSkills: async (req, res) => {
    console.log(`saveSkills fired`, req.body)
    const db = req.app.get('db')

    let { char_name, inspiration, proficiency_bonus, sav_str, sav_dex, sav_con, sav_int, sav_wis, sav_cha, acrobatics, animal_handling, arcana, athletics,
      deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuation, religion, sleight_of_hand,
      stealth, survival } = req.body

    let newSkill = await db.save_skills([char_name, inspiration, proficiency_bonus, sav_str, sav_dex, sav_con, sav_int, sav_wis, sav_cha, acrobatics, animal_handling, arcana, athletics,
      deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuation, religion, sleight_of_hand,
      stealth, survival])

    res.send(newSkill)

  },

  saveArmor: async (req, res) => {
    console.log(`saveArmor fired`, req.body)
    const db = req.app.get('db')

    let { char_name, armor_class, initiative, speed, hit_point_max, current_hit_points, temporary_hit_points, hit_dice,
      success_1, success_2, success_3, failures_1, failures_2, failures_3 } = req.body

    let newArmor = await db.save_armor([char_name, armor_class, initiative, speed, hit_point_max, current_hit_points, temporary_hit_points, hit_dice,
      success_1, success_2, success_3, failures_1, failures_2, failures_3])

    res.send(newArmor)

  },

}