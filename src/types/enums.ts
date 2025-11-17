export enum ChatTypeEnum {
	User = 'User',
	Bot = 'Bot',
	Group = 'Group',
	Channel = 'Channel',
}

export enum ForwardedFromEnum {
	User = 'User',
	Channel = 'Channel',
	Bot = 'Bot',
}

export enum PaymentStatusEnum {
	Paid = 'Paid',
	NotPaid = 'NotPaid',
}

export enum PollStatusEnum {
	Open = 'Open',
	Closed = 'Closed',
}

export enum LiveLocationStatusEnum {
	Stopped = 'Stopped',
	Live = 'Live',
}

export enum FileTypeEnum {
	File = 'File',
	Image = 'Image',
	Voice = 'Voice',
	Music = 'Music',
	Gif = 'Gif',
	Video = 'Video',
}

export enum ButtonSelectionTypeEnum {
	TextOnly = 'TextOnly',
	TextImgThu = 'TextImgThu',
	TextImgBig = 'TextImgBig',
}

export enum ButtonSelectionSearchEnum {
	None = 'None',
	Local = 'Local',
	Api = 'Api',
}

export enum ButtonSelectionGetEnum {
	Local = 'Local',
	Api = 'Api',
}

export enum ButtonCalendarTypeEnum {
	DatePersian = 'DatePersian',
	DateGregorian = 'DateGregorian',
}

export enum ButtonTextboxTypeKeypadEnum {
	String = 'String',
	Number = 'Number',
}

export enum ButtonTextboxTypeLineEnum {
	SingleLine = 'SingleLine',
	MultiLine = 'MultiLine',
}

export enum ButtonLocationTypeEnum {
	Picker = 'Picker',
	View = 'View',
}

export enum MessageSenderEnum {
	User = 'User',
	Bot = 'Bot',
}

export enum UpdateTypeEnum {
	UpdatedMessage = 'UpdatedMessage',
	NewMessage = 'NewMessage',
	RemovedMessage = 'RemovedMessage',
	StartedBot = 'StartedBot',
	StoppedBot = 'StoppedBot',
	UpdatedPayment = 'UpdatedPayment',
}

export enum ChatKeypadTypeEnum {
	None = 'None',
	New = 'New',
	Remove = 'Remove',
}

export enum UpdateEndpointTypeEnum {
	ReceiveUpdate = 'ReceiveUpdate',
	ReceiveInlineMessage = 'ReceiveInlineMessage',
	ReceiveQuery = 'ReceiveQuery',
	GetSelectionItem = 'GetSelectionItem',
	SearchSelectionItems = 'SearchSelectionItems',
}

export enum ButtonTypeEnum {
	Simple = 'Simple',
	Selection = 'Selection',
	Calendar = 'Calendar',
	NumberPicker = 'NumberPicker',
	StringPicker = 'StringPicker',
	Location = 'Location',
	Payment = 'Payment',
	CameraImage = 'CameraImage',
	CameraVideo = 'CameraVideo',
	GalleryImage = 'GalleryImage',
	GalleryVideo = 'GalleryVideo',
	File = 'File',
	Audio = 'Audio',
	RecordAudio = 'RecordAudio',
	MyPhoneNumber = 'MyPhoneNumber',
	MyLocation = 'MyLocation',
	Textbox = 'Textbox',
	Link = 'Link',
	AskMyPhoneNumber = 'AskMyPhoneNumber',
	AskLocation = 'AskLocation',
	Barcode = 'Barcode',
}
