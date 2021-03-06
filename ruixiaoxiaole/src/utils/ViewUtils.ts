


class ViewUtils{

    /**
     * 将view置于舞台的正中央
     */
    public static setCenter(view:egret.DisplayObject):void{
	    view.x = (GlobalData.GameStage.stageWidth - view.width)/2;
	    view.y = (GlobalData.GameStage.stageHeight - view.height)/2;
        
	}
    

    public static getShape(width: number = 640,height: number = 960,color: number = 0x000000,alpha:number=0.7):egret.Shape{
        var shp: egret.Shape = new egret.Shape();
        shp.graphics.beginFill(color,alpha);
        shp.graphics.drawRect(0,0,width,height);
        shp.graphics.endFill();
        shp.touchEnabled = false;
        return shp;
	}
}