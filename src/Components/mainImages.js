import React from 'react';
import '../CSS/primary.css';
import { Button, Image, Icon, Label, Header, Modal } from 'semantic-ui-react';

var fileDir = {
    1:[
        { fileName: './images/n01491361_117.JPEG', id: "n01491361" },
        { fileName: './images/n01560419_13.JPEG', id: "n01560419" },
        { fileName: './images/n01667114_73.JPEG', id: "n01667114" },
        { fileName: './images/n01770081_202.JPEG', id: "n01770081" },
        { fileName: './images/n01773797_104.JPEG', id: "n01773797" },
        { fileName: './images/n02097047_35.JPEG', id: "n02097047" },
        { fileName: './images/n02097130_220.JPEG', id: "n02097130" },
        { fileName: './images/n02099712_110.JPEG', id: "n02099712" },
        { fileName: './images/n02105162_119.JPEG', id: "n02105162" },
        { fileName: './images/n02109525_37.JPEG', id: "n02109525" },
        { fileName: './images/n02110627_901.JPEG', id: "n02110627" },
        { fileName: './images/n02115641_216.JPEG', id: "n02115641" },
        { fileName: './images/n02123045_147.JPEG', id: "n02123045" },
        { fileName: './images/n02123394_125.JPEG', id: "n02123394" },
        { fileName: './images/n02123597_2.JPEG', id: "n02123597" },
        { fileName: './images/n02124075_183.JPEG', id: "n02124075" },
        { fileName: './images/n02128385_17.JPEG', id: "n02128385" },
        { fileName: './images/n02134084_143.JPEG', id: "n02134084" },
        { fileName: './images/n02169497_247.JPEG', id: "n02169497" },
        { fileName: './images/n02206856_52.JPEG', id: "n02206856" },
        { fileName: './images/n02226429_409.JPEG', id: "n02226429" },
        { fileName: './images/n02268443_1306.JPEG', id: "n02268443" },
        { fileName: './images/n02391049_18.JPEG', id: "n02391049" },
        { fileName: './images/n02396427_4.JPEG', id: "n02396427" },
        { fileName: './images/n02441942_150.JPEG', id: "n02441942" },
        { fileName: './images/n02480495_24.JPEG', id: "n02480495" },
        { fileName: './images/n02480855_289.JPEG', id: "n02480855" },
        { fileName: './images/n02497673_23.JPEG', id: "n02497673" },
        { fileName: './images/n02504013_87.JPEG', id: "n02504013" },
        { fileName: './images/n02510455_23.JPEG', id: "n02510455" },
        { fileName: './images/n02690373_102.JPEG', id: "n02690373" },
        { fileName: './images/n02727426_656.JPEG', id: "n02727426" },
        { fileName: './images/n02814533_240.JPEG', id: "n02814533" },
        { fileName: './images/n03208938_17.JPEG', id: "n03208938" },
        { fileName: './images/n03255030_84.JPEG', id: "n03255030" },
        { fileName: './images/n03344393_428.JPEG', id: "n03344393" },
        { fileName: './images/n03376595_24.JPEG', id: "n03376595" },
        { fileName: './images/n03424325_55.JPEG', id: "n03424325" },
        { fileName: './images/n03481172_198.JPEG', id: "n03481172" },
        { fileName: './images/n03485407_10.JPEG', id: "n03485407" },
        { fileName: './images/n03792782_104.JPEG', id: "n03792782" },
        { fileName: './images/n03843555_188.JPEG', id: "n03843555" },
        { fileName: './images/n03887697_36.JPEG', id: "n03887697" },
        { fileName: './images/n03929660_103.JPEG', id: "n03929660" },
        { fileName: './images/n07715103_75.JPEG', id: "n07715103" },
        { fileName: './images/n07880968_17.JPEG', id: "n07880968" },
        { fileName: './images/n11939491_563.JPEG', id: "n11939491" },
        { fileName: './images/n12057211_19.JPEG', id: "n12057211" },
        { fileName: './images/n12985857_42.JPEG', id: "n12985857" },
        { fileName: './images/n12998815_29.JPEG', id: "n12998815" },
    ],

    2:[
        { fileName: './images/n01443537_374.JPEG', id: "0" },
        { fileName: './images/n01443537_518.JPEG', id: "0" },
        { fileName: './images/n01484850_316.JPEG', id: "0" },
        { fileName: './images/n01514668_366.JPEG', id: "1" },
        { fileName: './images/n01514859_70.JPEG', id: "1" },
        { fileName: './images/n01558993_177.JPEG', id: "1" },
        { fileName: './images/n01630670_70.JPEG', id: "8" },
        { fileName: './images/n01631663_192.JPEG', id: "8" },
        { fileName: './images/n01664065_281.JPEG', id: "8" },
        { fileName: './images/n01687978_54.JPEG', id: "8" },
        { fileName: './images/n01795545_50.JPEG', id: "1" },
        { fileName: './images/n01877812_98.JPEG', id: "7" },
        { fileName: './images/n01944390_5.JPEG', id: "8" },
        { fileName: './images/n02006656_67.JPEG', id: "1" },
        { fileName: './images/n02074367_28.JPEG', id: "0" },
        { fileName: './images/n02085620_175.JPEG', id: "3" },
        { fileName: './images/n02086910_135.JPEG', id: "3" },
        { fileName: './images/n02088238_199.JPEG', id: "3" },
        { fileName: './images/n02090622_16.JPEG', id: "3" },
        { fileName: './images/n02092339_52.JPEG', id: "3" },
        { fileName: './images/n02094114_140.JPEG', id: "3" },
        { fileName: './images/n02094258_40.JPEG', id: "3" },
        { fileName: './images/n02094433_63.JPEG', id: "3" },
        { fileName: './images/n02098105_4.JPEG', id: "3" },
        { fileName: './images/n02105162_119.JPEG', id: "3" },
        { fileName: './images/n02105641_95.JPEG', id: "3" },
        { fileName: './images/n02106550_107.JPEG', id: "3" },
        { fileName: './images/n02107312_29.JPEG', id: "3" },
        { fileName: './images/n02109047_358.JPEG', id: "3" },
        { fileName: './images/n02110185_129.JPEG', id: "3" },
        { fileName: './images/n02112706_37.JPEG', id: "3" },
        { fileName: './images/n02123045_147.JPEG', id: "7" },
        { fileName: './images/n02125311_301.JPEG', id: "2" },
        { fileName: './images/n02206856_18.JPEG', id: "5" },
        { fileName: './images/n02229544_136.JPEG', id: "5" },
        { fileName: './images/n02276258_8.JPEG', id: "5" },
        { fileName: './images/n02279972_144.JPEG', id: "5" },
        { fileName: './images/n02346627_277.JPEG', id: "7" },
        { fileName: './images/n02356798_86.JPEG', id: "7" },
        { fileName: './images/n02363005_118.JPEG', id: "7" },
        { fileName: './images/n02389026_178.JPEG', id: "4" },
        { fileName: './images/n02391049_37.JPEG', id: "4" },
        { fileName: './images/n02396427_4.JPEG', id: "4" },
        { fileName: './images/n02408429_80.JPEG', id: "4" },
        { fileName: './images/n02410509_20.JPEG', id: "4" },
        { fileName: './images/n02447366_61.JPEG', id: "7" },
        { fileName: './images/n02480855_154.JPEG', id: "6" },
        { fileName: './images/n02488291_17.JPEG', id: "6" },
        { fileName: './images/n02488702_28.JPEG', id: "6" },
        { fileName: './images/n02493793_80.JPEG', id: "6" },
    ],

    3:[
        { fileName: './images/n02783161_123.JPEG', id: "n02783161" },
        { fileName: './images/n02906734_75.JPEG', id: "n02906734" },
        { fileName: './images/n02939185_150.JPEG', id: "n02939185" },
        { fileName: './images/n02951585_147.JPEG', id: "n02951585" },
        { fileName: './images/n02951585_474.JPEG', id: "n02951585" },
        { fileName: './images/n02966687_157.JPEG', id: "n02966687" },
        { fileName: './images/n02966687_337.JPEG', id: "n02966687" },
        { fileName: './images/n03000247_1224.JPEG', id: "n03000247" },
        { fileName: './images/n03000684_425.JPEG', id: "n03000684" },
        { fileName: './images/n03000684_731.JPEG', id: "n03000684" },
        { fileName: './images/n03041632_120.JPEG', id: "n03041632" },
        { fileName: './images/n03075370_387.JPEG', id: "n03075370" },
        { fileName: './images/n03109150_446.JPEG', id: "n03109150" },
        { fileName: './images/n03141823_623.JPEG', id: "n03141823" },
        { fileName: './images/n03259280_9.JPEG', id: "n03259280" },
        { fileName: './images/n03291819_187.JPEG', id: "n03291819" },
        { fileName: './images/n03291819_659.JPEG', id: "n03291819" },
        { fileName: './images/n03297495_93.JPEG', id: "n03297495" },
        { fileName: './images/n03388183_19.JPEG', id: "n03388183" },
        { fileName: './images/n03400231_33.JPEG', id: "n03400231" },
        { fileName: './images/n03424325_236.JPEG', id: "n03424325" },
        { fileName: './images/n03481172_408.JPEG', id: "n03481172" },
        { fileName: './images/n03498962_225.JPEG', id: "n03498962" },
        { fileName: './images/n03584829_2270.JPEG', id: "n03584829" },
        { fileName: './images/n03584829_464.JPEG', id: "n03584829" },
        { fileName: './images/n03658185_36.JPEG', id: "n03658185" },
        { fileName: './images/n03729826_226.JPEG', id: "n03729826" },
        { fileName: './images/n03761084_209.JPEG', id: "n03761084" },
        { fileName: './images/n03792972_184.JPEG', id: "n03792972" },
        { fileName: './images/n03908714_5.JPEG', id: "n03908714" },
        { fileName: './images/n03954731_9.JPEG', id: "n03954731" },
        { fileName: './images/n03995372_197.JPEG', id: "n03995372" },
        { fileName: './images/n03995372_542.JPEG', id: "n03995372" },
        { fileName: './images/n04067472_237.JPEG', id: "n04067472" },
        { fileName: './images/n04067472_293.JPEG', id: "n04067472" },
        { fileName: './images/n04116512_345.JPEG', id: "n04116512" },
        { fileName: './images/n04118776_420.JPEG', id: "n04118776" },
        { fileName: './images/n04141975_103.JPEG', id: "n04141975" },
        { fileName: './images/n04153751_154.JPEG', id: "n04153751" },
        { fileName: './images/n04153751_295.JPEG', id: "n04153751" },
        { fileName: './images/n04154565_753.JPEG', id: "n04154565" },
        { fileName: './images/n04208210_513.JPEG', id: "n04208210" },
        { fileName: './images/n04264628_262.JPEG', id: "n04264628" },
        { fileName: './images/n04270147_24.JPEG', id: "n04270147" },
        { fileName: './images/n04317175_235.JPEG', id: "n04317175" },
        { fileName: './images/n04317175_6.JPEG', id: "n04317175" },
        { fileName: './images/n04367480_192.JPEG', id: "n04367480" },
        { fileName: './images/n04367480_636.JPEG', id: "n04367480" },
        { fileName: './images/n04442312_168.JPEG', id: "n04442312" },
        { fileName: './images/n04517823_269.JPEG', id: "n04517823" },        
    ]
}

var activeIndex = Math.floor(Math.random() * 50), usedImages = [activeIndex], taskDone = 1, flag;
var timeTaken = { minutes: 0, seconds: 0, milsec: 0 }, indvTime = [0, 0, 0], addTime = [0, 0, 0], avgTime = [], Interval;
var level = 1, fileName = fileDir[level][activeIndex].fileName, levelFlag = [ true, true ];
const LevelLimit = [50, 100, 150];

export class MainImages extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isopen: false,
            activeNext: false,
            buttonText: "Next Image"
        };
    }

    componentDidMount() {
        //The componentDidMount() is a React method which is triggered when the app starts.
        alert("* Please disable AdBlock and any other antivirus software before you begin!\n Make sure to \"Allow\" popups/cookies on this app! *");

        this.props.onRef(this);
        this.props.setCards(level);
    }

    updateButton() {
        //A simple condition statement to enable/disable the NEXT button
        this.state.activeNext ? this.setState({ activeNext: false }) : this.setState({ activeNext: true })
    }

    OnFinish(x) {
        if ( x === 1 ) {
            //To find the Average total time
            let td = taskDone - 1;
            avgTime[0] = addTime[0] / td;
            avgTime[1] = addTime[1] / td;
            avgTime[2] = addTime[2] / td;

            avgTime[1] += (avgTime[0] * 60) % 60;
            avgTime[2] += (avgTime[1] * 100) % 100;

            avgTime[0] = Math.floor(avgTime[0]);
            avgTime[1] = Math.floor(avgTime[1]);
            avgTime[2] = Math.floor(avgTime[2]);

            //this onFinish is in App.js as an html prop in <MainImages>
            this.props.onFinish(addTime, avgTime);
        }
        else {
            //To find the Average indv time
            let td = LevelLimit[0] ;
            avgTime[0] = indvTime[0] / td;
            avgTime[1] = indvTime[1] / td;
            avgTime[2] = indvTime[2] / td;

            avgTime[1] += (avgTime[0] * 60) % 60;
            avgTime[2] += (avgTime[1] * 100) % 100;

            avgTime[0] = Math.floor(avgTime[0]);
            avgTime[1] = Math.floor(avgTime[1]);
            avgTime[2] = Math.floor(avgTime[2]);

            this.props.apndtime(indvTime, avgTime);
        }
    }

    startTimer() {
        timeTaken.milsec++;

        if (timeTaken.milsec > 99) {
            timeTaken.seconds++;
            timeTaken.milsec = 0;
        }

        if (timeTaken.seconds > 59) {
            timeTaken.minutes++;
            timeTaken.seconds = 0;
        }
    }

    startWatch() {
        Interval = setInterval(this.startTimer, 10);
    }

    changeImage() {
        //Pause the StopWatch
        clearInterval(Interval);
        this.updateButton();

        //To pass values to Parent (App.js);
        let t = timeTaken.minutes + ":" + timeTaken.seconds + ":" + timeTaken.milsec;

        if( level === 2 || level === 3 ) 
            this.props.onNextImage(fileDir[level][activeIndex].fileName, fileDir[level][activeIndex].id, t);
        else 
            this.props.onNextImage(fileDir[level][activeIndex].fileName, parseInt(fileDir[level][activeIndex].id.slice(1), 10), t);
        
        //Add the time to find total time take
        addTime[2] += timeTaken.milsec;
        if (addTime[2] > 99) {
            addTime[1] += Math.floor(addTime[2] / 100);
            addTime[2] %= 100;
        }
        addTime[1] += timeTaken.seconds;
        if (addTime[1] > 59) {
            addTime[0] += Math.floor(addTime[1] / 60);
            addTime[1] %= 60;
        }
        addTime[0] += timeTaken.minutes;

        //For individual Level time
        indvTime[2] += timeTaken.milsec;
        if (indvTime[2] > 99) {
            indvTime[1] += Math.floor(indvTime[2] / 100);
            indvTime[2] %= 100;
        }
        indvTime[1] += timeTaken.seconds;
        if (indvTime[1] > 59) {
            indvTime[0] += Math.floor(indvTime[1] / 60);
            indvTime[1] %= 60;
        }
        indvTime[0] += timeTaken.minutes;
        
        //Clear the StopWatch
        timeTaken.milsec = timeTaken.seconds = timeTaken.minutes = 0;

        //Load next image
        taskDone++;
        //Change of Level happens here
        if (taskDone > LevelLimit[0] && taskDone < LevelLimit[1] && levelFlag[0] === true) {

            //to indicate a Level has finished labeling
            this.OnFinish(0);

            //sets the heirarchy level
            level = 2;

            //To flush out the indices and store new values
            usedImages = usedImages.slice(0, 0);

            //Reset indv Timer
            indvTime[0] = indvTime[1] = indvTime[2] = 0;

            //to prevent re-entering this if statement
            levelFlag[0] = false;
        }
        else
        if (taskDone > LevelLimit[1] && taskDone < LevelLimit[2] && levelFlag[1] === true) {
            this.OnFinish(0);
            level =3;
            usedImages = usedImages.slice(0, 0);
            indvTime[0] = indvTime[1] = indvTime[2] = 0;
            levelFlag[1] = false;
        }
        else
        if( taskDone === LevelLimit[2] )
            this.setState({ buttonText: "Finish!" })
        
        if (taskDone > LevelLimit[2] ) {
            this.OnFinish(0);
            indvTime[0] = indvTime[1] = indvTime[2] = 0;

            //indicated that the task has finished
            this.setState({
                isopen: true
            })
        }
        else {
            //Here we check if a randomly selected image has been selected before or not
            do {
                flag = true;
                activeIndex = Math.floor(Math.random() * 50);

                //We store the array index of FileDir in an array and use it compare
                for (var i = 0; i < usedImages.length; i++)
                    if (usedImages[i] === activeIndex)
                        flag = false;

                //only if a new, unique value is selected, it will display
                if (flag === true) {
                    usedImages.push(activeIndex);
                    fileName= fileDir[level][activeIndex].fileName;
                }
            } while (flag !== true);
        }

        this.props.setCards(level);

        //Start the Watch
        this.startWatch();
    }

    render() {
        return (
            <div>
                <Image className="imageStyling" src={fileName} />

                <Label style={{ zIndex: "1", position: "fixed", top: "10px", right: '4vw' }} color="teal">
                    {taskDone}/150
                </Label>

                <div className="NextButton" style={{ width: '180px' }} >
                    {this.state.activeNext ?
                        <Button primary animated size='huge' onClick={this.changeImage.bind(this)}>
                            <Button.Content visible> {this.state.buttonText} </Button.Content>
                            <Button.Content hidden>
                                <Icon name='right arrow' />
                            </Button.Content>
                        </Button>
                        :
                        <Button disabled size='huge'>{this.state.buttonText}</Button>
                    }
                </div>

                <Modal open={this.state.isopen} basic dimmer="blurring" style={{ position: "fixed", width: "auto", marginTop: "30vh", marginLeft: "38vw" }}>
                    <Header icon='check square outline' style={{ textAlign: "center" }} content='Task Completed!' />
                    <Modal.Content>
                        <h2> Thank you for your participation! <br />
                            Please download the result. </h2>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='blue' inverted onClick={this.OnFinish.bind(this, 1)}>
                            <Icon name='download icon' /> Download Result
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}