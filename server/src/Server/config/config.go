package config

import (
	"github.com/magicsea/ganet/config"
	"encoding/json"
	"io/ioutil"
	"log"
	"strconv"
)

type Config struct {
	Base           config.ServiceConfig `json:"config"`
	Redis          *RedisConf           `json:"redis"`
	DB             map[string]string    `json:"db"`
	DesignConfig   map[string]string    `json:"design"`
	Ver            string               `json:"ver"`
	GameConfigPath string               `json:"gameconfig"`

}

type RedisConf struct {
	Addr     string `json:"addr"`
	Password string `json:"password"`
	PoolSize int    `json:"poolsize"`
	DBs      []int  `json:"dbs"`
}

var appConfig *Config

func LoadConfig(confPath string) (*Config, error) {
	if data, err := ioutil.ReadFile(confPath); err != nil {
		return nil, err
	} else {
		var conf = &Config{}
		err := json.Unmarshal(data, conf)
		appConfig = conf
		if err != nil {
			return nil, err
		}
		//if conf.GameConfigPath != "" {
		//	err2 := LoadGameConfig(conf.GameConfigPath)
		//	return conf, err2
		//}
		return conf, nil
	}

}

func (conf *Config) GetDBConfigInt(key string) (int, bool) {
	if v, ok := conf.DB[key]; ok {
		i, e := strconv.Atoi(v)
		if e != nil {
			log.Fatalf("GetDBConfigInt err:%v", key)
		}
		return i, true
	}
	return 0, false
}

func GetAppConf() *Config {
	return appConfig
}
func SetConfig(c *Config) {
	appConfig = c
}
