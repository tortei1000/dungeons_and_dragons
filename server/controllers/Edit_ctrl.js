module.exports = {
  editCharInfo: async (req, res) => {
    
    const db = req.app.get('db')

    let { char_name, char_class, char_level, background, player_name, race, alignment, experience_points } = req.body

    let editCharInfo = await db.edit_char_info([char_name, char_class, char_level, background, player_name, race, alignment, experience_points])

    res.send(editCharInfo)

  },

  saveAtt: async (req, res) => {
    
    const db = req.app.get('db')

    let { char_name, str, dex, con, cha, intel, wis } = req.body

    let newStr = await db.save_att([char_name, str, dex, con, cha, intel, wis])

    res.send(newStr)

  },

  saveSkills: async (req, res) => {
    
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
    
    const db = req.app.get('db')

    let { char_name, armor_class, initiative, speed, hit_point_max, current_hit_points, temporary_hit_points, hit_dice,
      success_1, success_2, success_3, failures_1, failures_2, failures_3 } = req.body

    let newArmor = await db.save_armor([char_name, armor_class, initiative, speed, hit_point_max, current_hit_points, temporary_hit_points, hit_dice,
      success_1, success_2, success_3, failures_1, failures_2, failures_3])

    res.send(newArmor)

  },

  deleteAttacks: async (req,res) => {
    
    const db = req.app.get('db')

    let {id} = req.params
    let {id : user} = req.session.user
    let {char_name} = req.body

    let newAttacks = await db.delete_attacks([id, user, char_name])

    res.send(newAttacks)

  },

  createAttack: async (req, res) => {
    
    const db = req.app.get('db')

    let { id, atk_name, atk_bonus, atk_damage, atk_type} = req.body

    await db.new_attack([id, atk_name, atk_bonus, atk_damage, atk_type])

    res.sendStatus(200)

  },

  savePerception: async (req, res) => {
    
    const db = req.app.get('db')

    let { char_name, passive_perception } = req.body

    let newPerc = await db.save_perception([char_name, passive_perception])

    res.send(newPerc)

  },

  deleteProf: async (req,res) => {
    
    const db = req.app.get('db')

    let {id} = req.params
    let {id : user} = req.session.user
    let {char_name} = req.body

    let newProf = await db.delete_prof([id, user, char_name])

    res.send(newProf)

  },
  createProf: async (req, res) => {
    
    const db = req.app.get('db')

    let { id, prof_name } = req.body

    await db.new_prof([id, prof_name])

    res.sendStatus(200)


  },

  createLang: async (req, res) => {
    
    const db = req.app.get('db')

    let { id, lang_name } = req.body

    await db.new_lang([id, lang_name])

    res.sendStatus(200)

    
  },

  deleteLang: async (req,res) => {
    
    const db = req.app.get('db')

    let {id} = req.params
    let {id : user} = req.session.user
    let {char_name} = req.body

    let newProf = await db.delete_lang([id, user, char_name])

    res.send(newProf)

  },

  deletePack: async (req,res) => {
    
    const db = req.app.get('db')

    let {id} = req.params
    let {id : user} = req.session.user
    let {char_name} = req.body

    let newProf = await db.delete_pack([id, user, char_name])

    res.send(newProf)

  },

  deleteGear: async (req,res) => {
    
    const db = req.app.get('db')

    let {id} = req.params
    let {id : user} = req.session.user
    let {char_name} = req.body

    let newProf = await db.delete_gear([id, user, char_name])

    res.send(newProf)

  },

  createDung: async (req, res) => {
    
    const db = req.app.get('db')

    let { id, dung_name, dung_qty } = req.body

    await db.create_dung([id, dung_name, dung_qty])

    res.sendStatus(200)

    
  },

  createOut: async (req, res) => {
    
    const db = req.app.get('db')

    let { id, out_name, out_qty } = req.body

    await db.create_out([id, out_name, out_qty])

    res.sendStatus(200)

    
  },

  editTraits: async (req, res) => {
    
    const db = req.app.get('db')

    let { char_name, personality_trait, ideal, bond, flaw } = req.body

    let editTraits = await db.edit_traits([char_name, personality_trait, ideal, bond, flaw])

    res.send(editTraits)

  },

  deleteFeature: async (req,res) => {
    
    const db = req.app.get('db')

    let {id} = req.params
    let {id : user} = req.session.user
    let {char_name} = req.body

    let newProf = await db.delete_feature([id, user, char_name])

    res.send(newProf)

  },

  createFeature: async (req, res) => {
    
    const db = req.app.get('db')

    let { id, feature_name, feature_desc, feature_uses } = req.body

    await db.create_feature([id, feature_name, feature_desc, feature_uses])

    res.sendStatus(200)

    
  },
  newSpell: async (req, res) => {
    
    const db = req.app.get('db')

    let { id, spell_name, spell_desc, spell_uses, spell_level } = req.body

    await db.create_spell([id, spell_name, spell_desc, spell_uses, spell_level])

    res.sendStatus(200)

    
  },

  deleteSpells: async (req,res) => {
    
    const db = req.app.get('db')

    let {id} = req.params
    let {id : user} = req.session.user
    let {char_name} = req.body

    let newSpell = await db.delete_spell([id, user, char_name])

    res.send(newSpell)

  },

  getParty: async (req,res) => {
    console.log('get aprty fired', req.body)
    const db = req.app.get('db')
    let { id } = req.session.user
    

    let thisCharParties = await db.get_parties([id])
    
    res.send(thisCharParties)
        
  },

}