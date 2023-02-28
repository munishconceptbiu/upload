const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = { 
        cav_id: { type: DataTypes.INTEGER, allowNull: false },
        category_id: { type: DataTypes.INTEGER, allowNull: false },       
        category:{ type: DataTypes.STRING, allowNull: false },
        client_id: { type: DataTypes.INTEGER, allowNull: false },    
        article_id: { type: DataTypes.INTEGER, allowNull: false },    
        entity_id: { type: DataTypes.INTEGER, allowNull: false },    
        entity_name:{ type: DataTypes.STRING, allowNull: false },
        press_release_id: { type: DataTypes.INTEGER, allowNull: false },
        press_release:{ type: DataTypes.STRING, allowNull: false },
        tonality:{ type: DataTypes.STRING, allowNull: false },
        headline_mention:{ type: DataTypes.STRING, allowNull: false },
        prominent_id: { type: DataTypes.INTEGER, allowNull: false },    
        prominent:{ type: DataTypes.STRING, allowNull: false },
        word_count: { type: DataTypes.INTEGER, allowNull: false },    
        website_url:{ type: DataTypes.STRING, allowNull: false },
        publish_date: { type: DataTypes.STRING, allowNull: true},   
        publication_id: { type: DataTypes.INTEGER, allowNull: false },   
        publication:{ type: DataTypes.STRING, allowNull: false },
        edition_id: { type: DataTypes.INTEGER, allowNull: false },    
        edition:{ type: DataTypes.STRING, allowNull: false },
        suppliment_id: { type: DataTypes.INTEGER, allowNull: false },    
        suppliment:{ type: DataTypes.STRING, allowNull: false },
        language_id: { type: DataTypes.INTEGER, allowNull: false },    
        language:{ type: DataTypes.STRING, allowNull: false },
        publication_type_id: { type: DataTypes.INTEGER, allowNull: false },    
        publication_type:{ type: DataTypes.STRING, allowNull: false },
        headline:{ type: DataTypes.STRING, allowNull: false },
        journalist_id: { type: DataTypes.INTEGER, allowNull: false },    
        journalist:{ type: DataTypes.STRING, allowNull: false },
        agency_id: { type: DataTypes.INTEGER, allowNull: false },    
        agency:{ type: DataTypes.STRING, allowNull: false },
        author_id: { type: DataTypes.INTEGER, allowNull: false }, 
        mav:{ type: DataTypes.STRING, allowNull: false },
        ccm:{ type: DataTypes.STRING, allowNull: false },
        page_no:{ type: DataTypes.STRING, allowNull: false },
        merge_unmerge_key:{ type: DataTypes.STRING, allowNull: false },
        media_type_id: { type: DataTypes.INTEGER, allowNull: false },   
        article_created_on: { type: DataTypes.INTEGER, allowNull: false },  
        created_on: { type: DataTypes.INTEGER, allowNull: false },  
        created_by: { type: DataTypes.INTEGER, allowNull: true },
        last_modified_by: { type: DataTypes.INTEGER, allowNull: true },
        last_modified_on: { type: DataTypes.DATE, allowNull: true},    
        column_name:{ type: DataTypes.STRING, allowNull: false }, 
        bureau:{ type: DataTypes.STRING, allowNull: false }, 
        state_id: { type: DataTypes.INTEGER, allowNull: false }, 
        state:{ type: DataTypes.STRING, allowNull: false },
        is_unique_story: { type: DataTypes.INTEGER, allowNull: false }, 
        journalist_type:{ type: DataTypes.STRING, allowNull: false },
        article_location:{ type: DataTypes.STRING, allowNull: false },
        article_summary:{ type: DataTypes.STRING, allowNull: false },
        article_type:{ type: DataTypes.STRING, allowNull: false },
        hit_miss:{ type: DataTypes.STRING, allowNull: false },
        push_pull:{ type: DataTypes.STRING, allowNull: false },
        positive_ccms: { type: DataTypes.INTEGER, allowNull: false }, 
        neutral_ccms: { type: DataTypes.INTEGER, allowNull: false }, 
        negative_ccms: { type: DataTypes.INTEGER, allowNull: false }, 
        total_ccms: { type: DataTypes.INTEGER, allowNull: false }, 
        photo_presence: { type: DataTypes.INTEGER, allowNull: false }, 
        photo_type:{ type: DataTypes.STRING, allowNull: false },
        photo_keyword:{ type: DataTypes.STRING, allowNull: false },
        photo_tonality:{ type: DataTypes.STRING, allowNull: false },
        headline_presence: { type: DataTypes.INTEGER, allowNull: false }, 
        headline_visibility:{ type: DataTypes.STRING, allowNull: false },
        headline_keyword:{ type: DataTypes.STRING, allowNull: false },
        headline_tonality:{ type: DataTypes.STRING, allowNull: false },
        frontpage:{ type: DataTypes.STRING, allowNull: false },
        key_messages_presence:{ type: DataTypes.STRING, allowNull: false },
        key_messages:{ type: DataTypes.STRING, allowNull: false },
        photo_weightage: { type: DataTypes.INTEGER, allowNull: false }, 
        headline_weightage: { type: DataTypes.INTEGER, allowNull: false }, 
        shared_ex_weightage: { type: DataTypes.INTEGER, allowNull: false }, 
        co_score: { type: DataTypes.INTEGER, allowNull: false }, 
        visibility_score: { type: DataTypes.INTEGER, allowNull: false },         
        reach:{ type: DataTypes.STRING, allowNull: false },
        index:{ type: DataTypes.STRING, allowNull: false },
        wordcount_weightage: { type: DataTypes.INTEGER, allowNull: false },   
        monthly_visitor: { type: DataTypes.INTEGER, allowNull: false },   
        daily_visitor: { type: DataTypes.INTEGER, allowNull: false },   
        priority:{ type: DataTypes.STRING, allowNull: false },
        priority_weightage: { type: DataTypes.INTEGER, allowNull: false }, 
        vertical:{ type: DataTypes.STRING, allowNull: false },
        electrical_vehicle:{ type: DataTypes.STRING, allowNull: false },
        author_name:{ type: DataTypes.STRING, allowNull: false },
        topic_id: { type: DataTypes.INTEGER, allowNull: false },  
        topic:{ type: DataTypes.STRING, allowNull: false }, 
        zone_id: { type: DataTypes.INTEGER, allowNull: false },  
        zone:{ type: DataTypes.STRING, allowNull: false }, 
        keyword_id:{ type: DataTypes.INTEGER, allowNull: false }, 
        keyword:{ type: DataTypes.STRING, allowNull: false }, 
        keyword_category:{ type: DataTypes.STRING, allowNull: false }, 
        keyword_category1:{ type: DataTypes.STRING, allowNull: false }, 
        keyword_category2:{ type: DataTypes.STRING, allowNull: false }, 
        theme_id:{ type: DataTypes.INTEGER, allowNull: false }, 
        theme:{ type: DataTypes.STRING, allowNull: false },
        createdAt: { type: DataTypes.DATE, allowNull: true},
        updatedAt: { type: DataTypes.DATE, allowNull: true},   
    };

    const options = {
    };

    return sequelize.define('qa_articles_row', attributes, options);
}