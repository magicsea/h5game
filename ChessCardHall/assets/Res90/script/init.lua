function __G__TRACKBACK__(msg)
    print("----------------------------------------")
    print("LUA ERROR: " .. tostring(msg) .. "\n")
    print(debug.traceback())
    print("----------------------------------------")
end

--tolua_Cocos2d_open()
--tolua_Cocos2d_kmGLFreeAll00()
local function main()
   macro_cclog("lua main bengin")
    -- avoid memory leak
    collectgarbage("setpause", 100)
    collectgarbage("setstepmul", 5000)

    local cclog = function(...)
        print(string.format(...))
    end

	local visibleSize = CCDirector:sharedDirector():getVisibleSize()

	cclog("init ok")
    --require "hello2"
    --cclog("result is " )

 macro_cclog("lua main end")
end


xpcall(main, __G__TRACKBACK__)