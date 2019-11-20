## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
-  has_many :user_tags
-  has_many :user_tag,through: :user_tags




## users_idテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
-  has_many :user_tags
-  has_many :user_tag,through: :user_tags
-  has_many :imags  
-  has_many :comments


## users_tagテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association

-  belongs_to :users 
-  belongs_to :groups_users





## imagesテーブル

|Column|Type|Options|
|------|----|-------|
|image|string|
|user_id|integer|

### Association
- has_many :user
- belongs_to :imags




## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|comments|string
|group_id|integer
|group_id|integer

### Association
- has_many :user
- belongs_to:comments