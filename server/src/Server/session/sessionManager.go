package session

type SessionManager struct {
	players      map[uint64]*PlayerSession
	name2players map[string]*PlayerSession //名字索引
}

func NewSessionManager() *SessionManager {
	sm := new(SessionManager)
	sm.players = make(map[uint64]*PlayerSession)
	sm.name2players = make(map[string]*PlayerSession)
	return sm
}

func (mgr *SessionManager) AddSession(session *PlayerSession) {
	mgr.players[session.userInfo.Uid] = session
	mgr.name2players[session.userInfo.Name] = session
}

func (mgr *SessionManager) GetSession(uid uint64) *PlayerSession {
	return mgr.players[uid]
}
func (mgr *SessionManager) GetSessionByName(name string) *PlayerSession {
	return mgr.name2players[name]
}
func (mgr *SessionManager) RemoveSession(uid uint64) *PlayerSession {
	ss := mgr.GetSession(uid)
	delete(mgr.players, uid)
	if ss != nil {
		delete(mgr.name2players, ss.userInfo.Name)
	}
	return ss
}
