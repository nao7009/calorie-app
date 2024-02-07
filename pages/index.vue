<template>
    <div>
        <div class="title">
            <h1>
                Calculate the calories in a tall Starbucks drink
            </h1>
            <p>
                スタバのTallサイズのドリンクのカロリーを計算する
            </p>
        </div>
        <div class="image">
            <img src="~/assets/image/1533374951.png" alt="スタバの画像">
            <!-- <img src="/1533374951.png" alt="スタバの画像"> -->
        </div>
        <hr>
        <div class="drink">
            <div class="drinkTitle">
                <h2>Choose your drink</h2>
                <p>ドリンクを選んでね</p>
            </div>
            <div class="menu">
                <div class="drinkMenu">
                    <p>コーヒー</p>               
                    <select name="coffee" id="coffee" v-model="coffee">
                        <option value="">Please select</option>
                        <option value="dripCoffee">ドリップコーヒー</option>
                        <option value="caffeMisto">カフェミスト</option>
                        <option value="coldBrewCoffee">コールドブリューコーヒー</option>
                        <option value="coffeePress">コーヒープレス</option>
                    </select>
                </div>
                <div class="drinkMenu">
                    <p>エスプレッソ</p>               
                    <select name="espresso" id="espresso" v-model="espresso">
                        <option value="">Please select</option>
                        <option value="starbucksLatte">スターバックスラテ</option>
                        <option value="soyLatte">ソイラテ</option>
                        <option value="almondMilkLatte">アーモンドミルクラテ</option>
                        <option value="oatMilkLatte">オーツミルクラテ</option>
                        <option value="cappuccino">カプチーノ</option>
                        <option value="caramelMacchiato">キャラメルマキアート</option>
                        <option value="cafeMocha">カフェモカ</option>
                        <option value="whiteMocha">ホワイトモカ</option>
                        <option value="cafeAmericano">カフェアメリカーノ</option>
                        <option value="espresso">エスプレッソ</option>
                        <option value="starbucksBlondeLatte">スターバックスブロンドラテwithオーツミルク</option>
                        <option value="tripleEspressoLatte">トリプルエスプレッソラテ</option>
                    </select>
                </div>
                <div class="drinkMenu">
                    <p>フラペチーノ</p>
                    <select name="frappuccino" id="frappuccino" v-model="frappuccino">
                        <option value="">Please select</option>
                        <option value="espressoAfoguardFrappuccino">エスプレッソアフォガードフラペチーノ</option>
                        <option value="coffeeFrappuccino">コーヒーフラペチーノ</option>
                        <option value="darkMochaChipFrappuccino">ダークモカチップフラペチーノ</option>
                        <option value="caramelFrappuccino">キャラメルフラペチーノ</option>
                        <option value="matchaCreamFrappuccino">抹茶クリームフラペチーノ</option>
                        <option value="vanillaCreamFrappuccino">バニラクリームフラペチーノ</option>
                        <option value="mangoPassionTeaFrappuccino">マンゴーパッションティーフラペチーノ</option>
                    </select>
                </div>
                <div class="drinkMenu">
                    <p>ティー</p>
                    <select name="tea" id="tea" v-model="tea">
                        <option value="">Please select</option>
                        <option value="soyChaiTeaLatte">ソイチャイティーラテ</option>
                        <option value="joyfulMedleyTeaLatte">ジョイフルメドレーティーラテ</option>
                        <option value="joyfulMedley">ジョイフルメドレー</option>
                        <option value="yuzuAndCitrus">ゆずシトラス＆ティー</option>
                        <option value="chaiTeaLatte">チャイティーラテ</option>
                        <option value="roastedGreenTeaLatte">ほうじ茶ティーラテ</option>
                        <option value="matchaTeaLatte">抹茶ティーラテ</option>
                        <option value="englishBreakfastTeaLatte">イングリッシュブレックファストティーラテ</option>
                        <option value="chamomileTeaLatte">カモミールティーラテ</option>
                        <option value="earlGreyTeaLatte">アールグレイティーラテ</option>
                        <option value="zenCloudOolongTeaLatte">ゼンクラウドウーロンティーラテ</option>
                        <option value="blackIceTea">アイスティー（ブラック）</option>
                        <option value="passionIceTea">アイスティー（パッション）</option>
                        <option value="englishBreakfastTea">イングリッシュブレックファスト</option>
                        <option value="earlGreyTea">アールグレイ</option>
                        <option value="chamomileTea">カモミール</option>
                        <option value="youthBerryTea">ユースベリー</option>
                        <option value="roastedGreenTea">ほうじ茶</option>
                        <option value="zenCloudOolongTea">ゼンクラウドウーロン</option>
                    </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="customise">
            <div class="customiseTitle">
                <h2>Choose customization</h2>
                <p>カスタマイズを選んでね</p>
            </div>
            <div class="menu">
                <div class="customiseMenu">
                    <p>ホイップクリーム</p>
                    <select name="whippedCream" id="whippedCream" v-model="whippedCream">
                        <option value="">Please select</option>
                        <option value="addWhippedCream">ホイップクリーム追加（通常）</option>
                        <option value="manyWhippedCream">ホイップクリーム追加（多め）</option>
                        <option value="fewWhippedCream">ホイップクリーム追加（少なめ）</option>
                        <option value="nonWhippedCream">ノンホイップ</option>
                    </select>
                </div>
                <div class="customiseMenu">
                    <p>シロップ</p>
                    <select name="syrup" id="syrup" v-model="syrup">
                        <option value="">Please select</option>
                        <option value="caramelFlavorSyrup">キャラメルフレーバーシロップ追加</option>
                        <option value="vanillaFlavorSyrup">バニラフレーバーシロップ追加</option>
                        <option value="chocolateFlavorSyrup">チョコレートフレーバーシロップ追加</option>
                        <option value="whiteMochaFlavorSyrup">ホワイトモカフレーバーシロップ追加</option>
                        <option value="tazoChaiFlavorSyrup">タゾチャイフレーバーシロップ追加</option>
                        <option value="manySyrup">シロップ多め</option>
                        <option value="fewSyrup">シロップ少なめ</option>
                    </select>
                </div>
                <div class="customiseMenu">
                    <p>エスプレッソショットの追加</p>
                    <select name="espressoShot" id="espressoShot" v-model="espressoShot">
                        <option value="">Please select</option>
                        <option value="oneShot">ショット追加</option>
                        <option value="twoShot">2ショット追加</option>
                        <option value="threeShot">3ショット追加</option>
                    </select> 
                </div>
                <div class="customiseMenu">
                    <p>ショットの変更</p>
                    <select name="shot" id="shot" v-model="shot">
                        <option value="">Please select</option>
                        <option value="wristletShot">リストレットショットへ変更</option>
                    </select>
                </div>
                <div class="customiseMenu">
                    <p>エスプレッソの種類を変更</p>
                    <select name="kindOfEspresso" id="kindOfEspresso" v-model="kindOfEspresso">
                        <option value="">Please select</option>
                        <option value="decaf">ディカフェエスプレッソへ変更</option>
                    </select> 
                </div>
                <div class="customiseMenu">
                    <p>ソース</p>
                    <select name="sauce" id="sauce" v-model="sauce">
                        <option value="">Please select</option>
                        <option value="honey">ハチミツ（ドリンクの上にトッピング）</option>
                        <option value="caramelSauce">キャラメルソース追加</option>
                        <option value="chocolateSauce">チョコレートソース追加</option>
                    </select>
                </div>
                <div class="customiseMenu">
                    <p>ミルク</p>
                    <select name="milk" id="milk" v-model="milk">
                        <option value="">Please select</option>
                        <option value="lawFatMilk">低脂肪タイプに変更</option>
                        <option value="fatFreeMilk">無脂肪乳に変更</option>
                        <option value="soyMilk">豆乳(調製豆乳)に変更</option>
                        <option value="almondMilk">アーモンドミルクに変更</option>
                        <option value="oatMilk">オーツミルクに変更</option>
                        <option value="breveMilk">ブレべに変更</option>
                    </select>   
                </div> 
            </div>       
        </div>
        <hr>
        <div class="calorie">
            <div class="calorieTitle">
                <h2>Total calories</h2>
                <p>合計カロリー</p>
            </div>
            <div class="totalCalorie">
                <h2>合計：&nbsp;&nbsp;{{ totalCalorie }}kcal&nbsp;&nbsp;です</h2>
            </div>
        </div>
        <hr>
        <div class="caution">
            <p>※コーヒー、エスプレッソ、ティーはホットのカロリーで算出しています。</p>
        </div>
        <!-- <NuxtLink to="/mypage">mypage</NuxtLink> -->
    </div>
</template>

<script>
export default{
    data:() => ({
        coffee: '',
        espresso: '',
        frappuccino: '',
        tea: '',
        whippedCream: '',
        syrup: '',
        espressoShot: '',
        shot: '',
        kindOfEspresso: '',
        sauce: '',
        milk: '',
        totalCalorie: 0,
    }),
    computed:{
        // コーヒーメニューのカロリーを代入する関数
        coffeeCalorie: function(){
            const coffeeCalories = {
                "dripCoffee": 18,
                "caffeMisto": 127,
                "coldBrewCoffee": 10,
                "coffeePress": 17,
            };

            var coffeeCalorie = coffeeCalories[this.coffee] ?? 0;

            return coffeeCalorie;
        },
        // エスプレッソメニューのカロリーを代入する関数
        espressoCalorie: function(){
            const espressoCalories = {
                "starbucksLatte": 223,
                "soyLatte": 208,
                "almondMilkLatte": 154,
                "oatMilkLatte": 213,
                "cappuccino": 114,
                "caramelMacchiato": 211,
                "cafeMocha": 399,
                "whiteMocha": 401, 
                "cafeAmericano": 11,
                "espresso": 5,
                "starbucksBlondeLatte": 213,
                "tripleEspressoLatte": 219,
            };

            var espressoCalorie = espressoCalories[this.espresso] ?? 0;

            return espressoCalorie;
        },
        // フラペチーノのカロリーを代入する関数
        frappuccinoCalorie: function(){
            const frappuccinoCalories = {
                "espressoAfoguardFrappuccino": 438,
                "coffeeFrappuccino": 183,
                "darkMochaChipFrappuccino": 341,
                "caramelFrappuccino": 302,
                "matchaCreamFrappuccino": 322,
                "vanillaCreamFrappuccino": 255,
                "mangoPassionTeaFrappuccino": 140,
            };

            var frappuccinoCalorie = frappuccinoCalories[this.frappuccino] ?? 0;

            return frappuccinoCalorie;
        },
        //　ティーメニューのカロリーを代入する関数
        teaCalorie: function(){
            const teaCalories = {
                "soyChaiTeaLatte": 212,
                "joyfulMedleyTeaLatte": 181,
                "joyfulMedley": 2,
                "yuzuAndCitrus": 119,
                "chaiTeaLatte": 220,
                "roastedGreenTeaLatte": 162,
                "matchaTeaLatte": 225,
                "englishBreakfastTeaLatte": 184,
                "chamomileTeaLatte": 179,
                "earlGreyTeaLatte": 180,
                "zenCloudOolongTeaLatte": 180,
                "blackIceTea": 4,
                "passionIceTea": 4,
                "englishBreakfastTea": 5,
                "earlGreyTea": 2,
                "chamomileTea": 0,
                "youthBerryTea": 5,
                "roastedGreenTea": 3,
                "zenCloudOolongTea": 1,
            };

            var teaCalorie = teaCalories[this.tea] ?? 0;

            return teaCalorie;
        },
        //ホイップのカスタマイズのカロリーを代入する関数
        whippedCreamCalorie: function(){
            const whippedCreamCalories = {
                "addWhippedCream": 82,
                "manyWhippedCream": 164,
                "fewWhippedCream": 41,
                "nonWhippedCream": -89,
            };

            var whippedCreamCalorie = whippedCreamCalories[this.whippedCream] ?? 0;

            return whippedCreamCalorie;
        },
        //シロップのカスタマイズのカロリーを代入する関数
        syrupCalorie: function(){
            const syrupCalories = {
                "caramelFlavorSyrup": 20,
                "vanillaFlavorSyrup": 20,
                "chocolateFlavorSyrup": 52,
                "whiteMochaFlavorSyrup": 52,
                "tazoChaiFlavorSyrup": 10,
                "manySyrup": 100, // 改良の必要あり（シロップの種類によって数値が変わるから）
                "fewSyrup": 10, // 改良の必要あり（シロップの種類によって数値が変わるから）
            };

            var syrupCalorie = syrupCalories[this.syrup] ?? 0;

            return syrupCalorie;
        },
        //エスプレッソショットのカロリーを代入する関数
        espressoShotCalorie: function(){
            const espressoShotCalories = {
                "oneShot": 5,
                "twoShot": 10,
                "threeShot": 15,
            };

            var espressoShotCalorie = espressoShotCalories[this.espressoShot] ?? 0;

            return espressoShotCalorie;
        },
        //ショットの種類のカロリーを代入する関数
        shotCalorie: function(){
            const shotCalories = {
                "wristletShot": 0,
            };

            var shotCalorie = shotCalories[this.shot] ?? 0;

            return shotCalorie;
        },
        // エスプレッソの種類のカロリーを代入する関数
        kindOfEspressoCalorie: function(){
            const kindOfEspressoCalories = {
                "decaf": 0,
            };

            var kindOfEspressoCalorie = kindOfEspressoCalories[this.kindOfEspresso] ?? 0;

            return kindOfEspressoCalorie;
        },
        // ソースのカロリーを代入する関数
        sauceCalorie: function(){
            const sauceCalories = {
                "honey": 65,
                "caramelSauce": 17,
                "chocolatelSauce": 13,
            };

            var sauceCalorie = sauceCalories[this.sauce] ?? 0;

            return sauceCalorie;
        },
        //ミルクのカロリーを代入する関数（ドリンクによって異なるので、改良の余地あり）
        milkCalorie: function(){
            const milkCalories = {
                "lawFatMilk": -42,
                "fatFreeMilk": -84,
                "soyMilk": -15,
                "almondMilk": -66,
                "oatMilk": -10,
                "breveMilk": 515,
            };

            var milkCalorie = milkCalories[this.milk] ?? 0;

            return milkCalorie;
        },
        //合計カロリーを計算する関数
        totalCalorie: function(){
            // ドリンク、カスタマイズそれぞれの合計カロリーを計算
            var drinkTotalCalorie = this.coffeeCalorie + this.espressoCalorie + this.frappuccinoCalorie + this.teaCalorie;
            var customiseTotalCalorie = this.whippedCreamCalorie + this.syrupCalorie + this.espressoShotCalorie + this.shotCalorie + this.kindOfEspressoCalorie + this.sauceCalorie + this.milkCalorie;
            
            // 合計カロリーを計算
            var totalCalorie = drinkTotalCalorie + customiseTotalCalorie;

            // 確認用
            console.log(totalCalorie);
            
            return totalCalorie;
        }
    }
}
</script>

<style lang="scss">
// scopedを入れるとbodyのCSSが適用されない

@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@1,100&family=Zen+Kaku+Gothic+New&display=swap');

body{
    background-color: #BEB4A7;
    @include mq('max','md') {
    }
    @include mq('max','sm') {
    }
}

.title{
    h1{
        color: #2e3839;
        text-align: center;
        font-family: 'Work Sans', sans-serif;
        font-family: 'Zen Kaku Gothic New', sans-serif;
        margin: 10px;
        @include mq('max','md') {
            margin: 5px;
            font-size: 18px;
        }
        @include mq('max','sm') {
        }
    }
    p{
        color: #2e3839;
        text-align: center;
        font-family: 'Work Sans', sans-serif;
        font-family: 'Zen Kaku Gothic New', sans-serif;
        margin: 10px;
        @include mq('max','md') {
            margin: 5px;
            font-size: 12px;
        }
        @include mq('max','sm') {
        }
    }
}

.image{
    width: 200px;
    margin: 30px auto;
    @include mq('max','md') {
        width: 100px;
        margin: 15px auto;    }
    @include mq('max','sm') {
    }
    img{
        width: 100%;
        @include mq('max','md') {
        }
        @include mq('max','sm') {
        }
    }
}

.drink{
    margin: 50px;
    text-align: center;
    @include mq('max','md') {
        margin: 20px;
    }
    @include mq('max','sm') {
    }
    p{
        color: #2e3839;
        font-family: 'Work Sans', sans-serif;
        font-family: 'Zen Kaku Gothic New', sans-serif;
        @include mq('max','md') {
        }
        @include mq('max','sm') {
        }
    }
}

.drinkTitle{
    text-align: center;
    @include mq('max','md') {
    }
    @include mq('max','sm') {
    }
    h2{
        color: #036242;
        font-family: 'Work Sans', sans-serif;
        font-family: 'Zen Kaku Gothic New', sans-serif;
        margin: 5px;
        @include mq('max','md') {
            font-size: 15px;
        }
        @include mq('max','sm') {
        }
    }
    p{
        color: #036242;
        text-align: center;
        font-family: 'Work Sans', sans-serif;
        font-family: 'Zen Kaku Gothic New', sans-serif;
        margin: 5px;
        @include mq('max','md') {
            font-size: 10px;
        }
        @include mq('max','sm') {
        }
    }
}

.menu{
    display: flex;
    flex-wrap: wrap;
    @include mq('max','md') {
    }
    @include mq('max','sm') {
    }
}

.drinkMenu{
    width: 50%;
    @include mq('max','md') {
    }
    @include mq('max','sm') {
    }
    p{
        margin: 30px 0 5px;
        @include mq('max','md') {
            font-size: 10px;
            margin: 15px 0 0;
        }
        @include mq('max','sm') {
        }
    }
    select{
        margin: 10px;
        height: 30px;
        border-radius: 5px;
        text-align: center;
        @include mq('max','md') {
            margin: 5px;
            height: 15px;
            width: 150px;
            font-size: 10px;
        }
        @include mq('max','sm') {
        }
    }
}

.customise{
    margin: 50px;
    text-align: center;
    @include mq('max','md') {
        margin: 20px;
    }
    @include mq('max','sm') {
    }
    p{
        color: #2e3839;
        font-family: 'Work Sans', sans-serif;
        font-family: 'Zen Kaku Gothic New', sans-serif;
        @include mq('max','md') {
        }
        @include mq('max','sm') {
        }
    }
}

.customiseTitle{
    text-align: center;
    @include mq('max','md') {
    }
    @include mq('max','sm') {
    }
    h2{
        color: #036242;
        font-family: 'Work Sans', sans-serif;
        font-family: 'Zen Kaku Gothic New', sans-serif;
        margin: 5px;
        @include mq('max','md') {
            font-size: 15px;
        }
        @include mq('max','sm') {
        }
    }
    p{
        color: #036242;
        text-align: center;
        font-family: 'Work Sans', sans-serif;
        font-family: 'Zen Kaku Gothic New', sans-serif;
        margin: 5px;
        @include mq('max','md') {
            font-size: 10px;
        }
        @include mq('max','sm') {
        }
    }
}

.customiseMenu{
    width: 25%;
    @include mq('max','md') {
        width: 50%;
    }
    @include mq('max','sm') {
    }
    p{
        margin: 30px 0 5px;
        @include mq('max','md') {
            font-size: 10px;
            margin: 15px 0 0;
        }
        @include mq('max','sm') {
        }
    }
    select{
        margin: 10px;
        height: 30px;
        border-radius: 5px;
        text-align: center;
        @include mq('max','md') {
            margin: 5px;
            height: 15px;
            width: 150px;
            font-size: 10px;
        }
        @include mq('max','sm') {
        }
    }
}

.calorie{
    margin: 50px;
    text-align: center;
    @include mq('max','md') {
        margin: 20px;
    }
    @include mq('max','sm') {
    }
}

.calorieTitle{
    text-align: center;
    @include mq('max','md') {
    }
    @include mq('max','sm') {
    }
    h2{
        color: #036242;
        font-family: 'Work Sans', sans-serif;
        font-family: 'Zen Kaku Gothic New', sans-serif;
        margin: 5px;
        @include mq('max','md') {
            font-size: 15px;
        }
        @include mq('max','sm') {
        }
    }
    p{
        color: #036242;
        text-align: center;
        font-family: 'Work Sans', sans-serif;
        font-family: 'Zen Kaku Gothic New', sans-serif;
        margin: 5px;
        @include mq('max','md') {
            font-size: 10px;
        }
        @include mq('max','sm') {
        }
    }
}

.totalCalorie{
    h2{
        // color: #036242;
        color: #fff;
        font-size: 35px;
        font-family: 'Work Sans', sans-serif;
        font-family: 'Zen Kaku Gothic New', sans-serif;
        @include mq('max','md') {
        }
        @include mq('max','sm') {
        }
    }
}

.caution{
    p{
        color: #2e3839;
        text-align: center;
        font-family: 'Work Sans', sans-serif;
        font-family: 'Zen Kaku Gothic New', sans-serif;
        margin: 50px auto;
        @include mq('max','md') {
            margin: 25px auto;
        }
        @include mq('max','sm') {
        }
    }
}

</style>