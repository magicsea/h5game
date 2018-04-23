var Common = require('JoystickCommon');
var JoystickBG = require('JoystickBG');

cc.Class({
    extends: cc.Component,

    properties: {
        dot: {
            default: null,
            type: cc.Node,
            displayName: '摇杆节点',
        },
        ring: {
            default: null,
            type: JoystickBG,
            displayName: '摇杆背景节点',
        },
        stickX: {
            default: 0,
            displayName: '摇杆X位置',
        },

        stickY: {
            default: 0,
            displayName: '摇杆Y位置',
        },
        touchType: {
            default: Common.TouchType.DEFAULT,
            type: Common.TouchType,
            displayName: '触摸类型',
        },   
        directionType: {
            default: Common.DirectionType.ALL,
            type: Common.DirectionType,
            displayName: '方向类型',

        },   
        sprite: {
            default: null,
            type: cc.Node,
            displayName: '操控的目标',

        },   
    
        _stickPos: {
            default: null,
            type: cc.Node,
            displayName: '摇杆当前位置',
        },   

        _touchLocation: {
            default: null,
            type: cc.Node,
            displayName: '摇杆当前位置',

        },
        
        touchPos :cc.Vec2.ZERO
        
    },

    onLoad: function () {
        this._createStickSprite();
        //当触摸类型为FOLLOW会在此对圆圈的触摸监听
        if(this.touchType == Common.TouchType.FOLLOW){
            this._initTouchEvent();
        }
    },
    update: function(dt) {
        //console.warn(`joystick pos --:${this.dot.getPosition()}`)
        this.touchPos = this.dot.getPosition()
    },

    getTouchPos:function() {
        return this.touchPos
    },

    _createStickSprite: function()
    {
        //调整摇杆的位置
        this.ring.node.setPosition(this.stickX, this.stickY);
        this.dot.setPosition(this.stickX, this.stickY);
    },

    _initTouchEvent: function()
    {
        var self = this;

        self.node.on(cc.Node.EventType.TOUCH_START, self._touchStartEvent, self);

        self.node.on(cc.Node.EventType.TOUCH_MOVE, self._touchMoveEvent, self);

        // 触摸在圆圈内离开或在圆圈外离开后，摇杆归位，player速度为0
        self.node.on(cc.Node.EventType.TOUCH_END, self._touchEndEvent,self);
        self.node.on(cc.Node.EventType.TOUCH_CANCEL, self._touchEndEvent,self);

        
    },

    _touchStartEvent: function(event) {
        // 记录触摸的世界坐标，给touch move使用
        this._touchLocation = event.getLocation();
        var touchPos = this.node.convertToNodeSpaceAR(event.getLocation());
        // 更改摇杆的位置
        this.ring.node.setPosition(touchPos);
        this.dot.setPosition(touchPos);
        // 记录摇杆位置，给touch move使用
        this._stickPos = touchPos;
    },

    _touchMoveEvent: function(event) {

        // 如果touch start位置和touch move相同，禁止移动
        if (this._touchLocation.x == event.getLocation().x && this._touchLocation.y == event.getLocation().y){
            return false;
        }
        // 以圆圈为锚点获取触摸坐标
        var touchPos = this.ring.node.convertToNodeSpaceAR(event.getLocation());
        var distance = this.ring._getDistance(touchPos,cc.p(0,0));
        var radius = this.ring.node.width / 2;

        // 由于摇杆的postion是以父节点为锚点，所以定位要加上touch start时的位置
        var posX = this._stickPos.x + touchPos.x;
        var posY = this._stickPos.y + touchPos.y;
        //console.warn(`joystick pos:${posX},${posY}`)
        if(radius > distance)
        {
            this.dot.setPosition(cc.p(posX, posY));
        }
        else
        {
            //控杆永远保持在圈内，并在圈内跟随触摸更新角度
            var x = this._stickPos.x + Math.cos(this.ring._getRadian(cc.p(posX,posY))) * radius;
            var y = this._stickPos.y + Math.sin(this.ring._getRadian(cc.p(posX,posY))) * radius;
            this.dot.setPosition(cc.p(x, y));
        }
        //更新角度
        this.ring._getAngle(cc.p(posX,posY));
        //设置实际速度
        this.ring._setSpeed(cc.p(posX,posY));
    },

    _touchEndEvent: function(){
        this.dot.setPosition(this.ring.node.getPosition());
        this.ring._speed = 0;
    },

});
