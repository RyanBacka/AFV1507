//
//  DetailViewController.h
//  cloud
//
//  Created by Ryan K Backa on 7/29/15.
//  Copyright (c) 2015 Ryan K Backa. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface DetailViewController : UIViewController

@property (strong, nonatomic) id detailItem;
@property (weak, nonatomic) IBOutlet UILabel *detailDescriptionLabel;

@end
